import { html } from 'lit';
import { localize } from '../../utils/localize';

export const materialSlotsSpecsTemplate = (entities, hass) => {

  const tempUnit = hass.states[entities.ams_temp]?.attributes?.unit_of_measurement || '°C';
  const humUnit = hass.states[entities.ams_humidity]?.attributes?.unit_of_measurement || '%';

  return html`
    <div class="materials-specs">
      ${entities.ams_temp? html`<div class="specs-item">
        <div class="value">
          ${entities.ams_temp}${tempUnit}
        </div>
        <div>${localize.t('materials.temperature')}</div>
      </div>` : ''}
      ${entities.ams_humidity ? html`<div class="specs-item">
        <div class="value">
          ${entities.ams_humidity}${humUnit}
        </div>
        <div>${localize.t('materials.humidity')}</div>
      </div>` : ''}
    </div>
  `
}