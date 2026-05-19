import { html } from 'lit';
import { localize } from '../../utils/localize';
import { formatTemperature } from '../../utils/formatters';
import { temperatureDialogTemplate } from './temperature-controls';

export const temperatureDisplayTemplate = (entities, hass, dialogConfig = {}, setDialogConfig) => {
  const handleControlClick = (type, currentValue, entityId) => {
    let config = {
      open: true,
      type,
      currentValue,
      entityId,
      onClose: () => setDialogConfig({ open: false })
    };

    switch (type) {
      case 'bed':
        config = {
          ...config,
          title: localize.t('temperatures.bed_target'),
          min: 0,
          max: 120
        };
        break;
      case 'nozzle':
        config = {
          ...config,
          title: localize.t('temperatures.nozzle_target'),
          min: 0,
          max: 320
        };
        break;
      case 'speed':
        config = {
          ...config,
          title: localize.t('temperatures.speed_profile')
        };
        break;
    }

    setDialogConfig(config);
  };

  // Get temperature units from sensors
  const bedTempUnit = hass.states[entities.bed_temp_entity]?.attributes?.unit_of_measurement || '°C';
  const nozzleTempUnit = hass.states[entities.nozzle_temp_entity]?.attributes?.unit_of_measurement || '°C';

  return entities.bed_temp || entities.nozzle_temp || entities.speed_profile? html`
    <div class="temperatures">
      ${entities.bed_temp ? html`
        <div 
          class="temp-item" 
          @click=${() => handleControlClick('bed', entities.bed_temp, entities.bed_target_temp_entity)}
        >
          <div class="temp-value">
            ${formatTemperature(entities.bed_temp, bedTempUnit)}
          </div>
          <div>${localize.t('temperatures.bed')}</div>
        </div>
      ` : ''}

      ${entities.nozzle_temp ? html`
        <div 
          class="temp-item"
          @click=${() => handleControlClick('nozzle', entities.nozzle_temp, entities.nozzle_target_temp_entity)}
        >
          <div class="temp-value">
            ${formatTemperature(entities.nozzle_temp, nozzleTempUnit)}
          </div>
          <div>${localize.t('temperatures.nozzle')}</div>
        </div>
      ` : ''}

      ${entities.speed_profile ? html`
        <div 
          class="temp-item"
          @click=${() => handleControlClick('speed', hass.states[entities.speed_profile]?.state || 'standard', entities.speed_profile)}
        >
          <div class="temp-value">
            ${localize.localize(`ui.card.printwatch.speed_profiles.${hass.states[entities.speed_profile]?.state || 'standard'}`)}
          </div>
          <div>${localize.t('temperatures.speed')}</div>
        </div>
      ` : ''}
    </div>

    ${temperatureDialogTemplate(dialogConfig, hass)}
  ` : html``;
};