// src/templates/card-template.js
import { html } from 'lit';
import { headerTemplate } from './components/header';
import { cameraFeedTemplate } from './components/camera-feed';
import { printStatusTemplate } from './components/print-status';
import { temperatureDisplayTemplate } from './components/temperature-display';
import { materialSlotsTemplate } from './components/material-slots';
import { materialSlotsSpecsTemplate } from './components/material-slots-specs';
import { temperatureDialogTemplate } from './components/temperature-controls';
import { confirmDialogTemplate } from './components/confirm-dialog';

export const cardTemplate = (context) => {
  const { 
    entities, 
    show,
    hass, 
    amsSlots, 
    _toggleLight, 
    _toggleFan, 
    _cameraError, 
    isOnline,
    formatters,
    dialogConfig,
    confirmDialog,
    setDialogConfig,
    handlePauseDialog,
    handleStopDialog,
    handlePopup
  } = context;

  if (!entities || !hass) return html``;

  const controls = {
    lightState: hass.states[entities.chamber_light_entity]?.state,
    fanState: hass.states[entities.aux_fan_entity]?.state,
    hasFan: !!entities.aux_fan_entity,
    onLightToggle: _toggleLight,
    onFanToggle: _toggleFan,
    hass
  };

  const cameraProps = {
    isOnline,
    hasError: _cameraError,
    currentStage: entities.currentStage,
    entityPicture: hass.states[entities.camera_entity]?.attributes?.entity_picture,
    onError: context.handleImageError,
    onLoad: context.handleImageLoad,
    hass,
    cameraEntity: entities.camera_entity,
    handlePopup
  };

  return html`
    <ha-card class="card">
      ${headerTemplate(entities, show, controls)}
      ${show.camera === true ? cameraFeedTemplate(cameraProps) : ''}
      ${printStatusTemplate(entities, {
        hass,
        onPause: handlePauseDialog,
        onStop: handleStopDialog,
        onImageError: context.handleImageError,
        handlePopup
      })}
      ${temperatureDisplayTemplate(entities, hass, dialogConfig, setDialogConfig)}
      ${materialSlotsSpecsTemplate(entities, hass)}
      ${show.ams_slots === true ? materialSlotsTemplate(amsSlots) : ''}
      ${temperatureDialogTemplate(dialogConfig, hass)}
      ${confirmDialogTemplate(confirmDialog)}
    </ha-card>
  `;
};
