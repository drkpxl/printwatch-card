// src/components/printwatch-card.js
import { LitElement, html } from 'lit';
import { cardTemplate } from '../templates/card-template';
import { cardStyles } from '../styles/card-styles';
import { formatDuration, formatEndTime } from '../utils/formatters';
import { isPrinting, isPaused, getAmsSlots, getEntityStates, showElement } from '../utils/state-helpers';
import { DEFAULT_CAMERA_REFRESH_RATE } from '../constants/config';
import { localize } from '../utils/localize';
import handleClick from '../utils/handleClick';
import './printwatch-card-editor';

class PrintWatchCard extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
      _lastCameraUpdate: { type: Number },
      _cameraUpdateInterval: { type: Number },
      _cameraError: { type: Boolean },
      _dialogConfig: { state: true },
      _confirmDialog: { state: true }
    };
  }

  static get styles() {
    return cardStyles;
  }

  constructor() {
    super();
    this._lastCameraUpdate = 0;
    this._cameraUpdateInterval = DEFAULT_CAMERA_REFRESH_RATE;
    this._cameraError = false;
    this._dialogConfig = { open: false };
    this._confirmDialog = { open: false };
    this.formatters = {
      formatDuration,
      formatEndTime
    };
    this._hassLang = '';
  }

  setConfig(config) {
    if (!config.title) {
      throw new Error('Please define title in the card configuration.');
    }
    this.config = { ...config };
    this._cameraUpdateInterval = config.camera.refresh_rate || DEFAULT_CAMERA_REFRESH_RATE;
  }

  isOnline() {
    if (!this.config.online) return true;
    const onlineEntity = this.hass?.states[this.config.online];
    return onlineEntity?.state === 'on';
  }

  shouldUpdateCamera() {
    if (!this.isOnline()) {
      return false;
    }

    const now = Date.now();
    return now - this._lastCameraUpdate > this._cameraUpdateInterval;
  }

  handleImageError() {
    this._cameraError = true;
    this.requestUpdate();
  }

  handleImageLoad() {
    this._cameraError = false;
  }

  handlePopup(e, entity, actionConfig = { action: 'more-info' }) {
    e.stopPropagation();
    handleClick(this, this.hass, this.config, actionConfig, entity.entity_id || entity);
  }

  _toggleLight() {
    const entityId = this.config?.control?.chamber_light;
    if (!entityId) return;

    const entity = this.hass.states[entityId];
    if (!entity) return;

    // Determine domain (e.g., 'light', 'switch') from entity id
    const domain = String(entityId).split('.')[0];
    const serviceAction = entity.state === 'on' ? 'turn_off' : 'turn_on';
    this.hass.callService(domain, serviceAction, { entity_id: entityId });
  }

  _toggleFan() {
    const fanEntity = this.hass.states[this.config.control.fan];
    if (!fanEntity) return;

    const service = fanEntity.state === 'on' ? 'turn_off' : 'turn_on';
    this.hass.callService('fan', service, {
      entity_id: this.config.control.fan,
    });
  }

  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has('hass')) {
      // Detect language changes from Home Assistant and trigger re-render
      const rawLang = this.hass?.locale?.language || this.hass?.language || '';
      const newLang = rawLang ? String(rawLang).split(/[-_]/)[0].toLowerCase() : '';
      if (newLang && newLang !== this._hassLang) {
        this._hassLang = newLang;
        // Force update so templates that call `localize.t()` re-evaluate
        this.requestUpdate();
        console.debug('printwatch-card: locale changed to', newLang);
      }

      if (this.shouldUpdateCamera()) {
        this._updateCameraFeed();
      }
    }
  }

  _updateCameraFeed() {
    if (!this.isOnline()) {
      return;
    }

    this._lastCameraUpdate = Date.now();

    const timestamp = new Date().getTime();
    const cameraImg = this.shadowRoot?.querySelector('.camera-feed img');
    if (cameraImg) {
      const cameraEntity = this.hass.states[this.config.camera.entity];
      if (cameraEntity?.attributes?.entity_picture) {
        cameraImg.src = `${cameraEntity.attributes.entity_picture}&t=${timestamp}`;
      }
    }

    const coverImg = this.shadowRoot?.querySelector('.preview-image img');
    if (coverImg) {
      const coverEntity = this.hass.states[this.config.model.preview];
      if (coverEntity?.attributes?.entity_picture) {
        coverImg.src = `${coverEntity.attributes.entity_picture}&t=${timestamp}`;
      }
    }
  }

  handlePauseDialog() {
    this._confirmDialog = {
      open: true,
      type: 'pause',
      title: localize.t('dialogs.pause.title'),
      message: localize.t('dialogs.pause.message'),
      onConfirm: () => {
        const entity = isPaused(this.hass, this.config)
          ? this.config.control.resume_button
          : this.config.control.pause_button;

        this.hass.callService('button', 'press', {
          entity_id: entity
        });
        this._confirmDialog = { open: false };
      },
      onCancel: () => {
        this._confirmDialog = { open: false };
      }
    };
    this.requestUpdate();
  }

  handleStopDialog() {
    this._confirmDialog = {
      open: true,
      type: 'stop',
      title: localize.t('dialogs.stop.title'),
      message: localize.t('dialogs.stop.message'),
      onConfirm: () => {
        this.hass.callService('button', 'press', {
          entity_id: this.config.control.stop_button
        });
        this._confirmDialog = { open: false };
      },
      onCancel: () => {
        this._confirmDialog = { open: false };
      }
    };
    this.requestUpdate();
  }

  render() {
    if (!this.hass || !this.config) {
      return html``;
    }

    const entities = getEntityStates(this.hass, this.config);
    const show = showElement(this.hass, this.config);
    const amsSlots = getAmsSlots(this.hass, this.config);

    const setDialogConfig = (config) => {
      this._dialogConfig = config;
      this.requestUpdate();
    };

    return cardTemplate({
      entities,
      show,
      hass: this.hass,
      amsSlots,
      formatters: this.formatters,
      _toggleLight: () => this._toggleLight(),
      _toggleFan: () => this._toggleFan(),
      _cameraError: this._cameraError,
      isOnline: this.isOnline(),
      handleImageError: () => this.handleImageError(),
      handleImageLoad: () => this.handleImageLoad(),
      dialogConfig: this._dialogConfig,
      confirmDialog: this._confirmDialog,
      setDialogConfig,
      handlePauseDialog: () => this.handlePauseDialog(),
      handleStopDialog: () => this.handleStopDialog(),
      handlePopup: (e, entity, actionConfig = { action: 'more-info' }) => this.handlePopup(e, entity, actionConfig),
    });
  }

  // This is used by Home Assistant for card size calculation
  getCardSize() {
    return 6;
  }

  static getConfigElement() {
    return document.createElement('printwatch-card-editor');
  }
}

customElements.define('printwatch-card', PrintWatchCard);

export default PrintWatchCard;