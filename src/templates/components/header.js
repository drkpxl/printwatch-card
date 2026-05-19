import { html } from 'lit';
import { localize } from '../../utils/localize';
import { formatDuration, formatEndTime } from '../../utils/formatters';

export const headerTemplate = (entities, show, controls) => html`
  <div class="header">
    <div>
      ${show.name === true ? html`<div class="printer-name">${entities.name}</div>` : ''}
      <div class="status">
        ${localize.localize(`entity.sensor.state.${entities.status}`)}
        ${entities.isPrinting && entities.totalLayers && entities.currentLayer ? html`
          <span class="progress-text">
            ${Math.round(entities.progress)}% | 
            ${localize.t('print.layer')}: ${entities.currentLayer}/${entities.totalLayers}
          </span>
        ` : ''}
      </div>
      ${entities.isPrinting ? html`
        ${entities.progress ? html`
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${entities.progress}%"></div>
          </div>
        ` : ''}
        ${entities.remainingTime ? html`
          <div class="layer-info">
            <b>${localize.t('time.left')}:</b> ${formatDuration(entities.remainingTime)},
            ${formatEndTime(entities.remainingTime, controls.hass)}
          </div>
        ` : ''}
      ` : ''}
    </div>
    ${show.control === true ? html`<div class="header-controls">
      ${entities.chamber_light_entity ? html`
        <button 
          class="icon-button ${controls.lightState === 'on' ? 'active' : ''}" 
          @click=${controls.onLightToggle}
        >
          <ha-icon icon="${controls.hass.states[entities.chamber_light_entity]?.attributes?.icon || 'mdi:lightbulb'}"></ha-icon>
        </button>
      ` : ''}
      ${entities.aux_fan_entity ? html`
        <button 
          class="icon-button ${controls.fanState === 'on' ? 'active' : ''}"
          @click=${controls.onFanToggle}
        >
          <ha-icon icon="${controls.hass.states[entities.aux_fan_entity]?.attributes?.icon || 'mdi:fan'}"></ha-icon>
        </button>
      ` : ''}
    </div>` : ''}
  </div>
`;