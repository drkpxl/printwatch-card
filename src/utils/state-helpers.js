const PRINTING_STATES = ['printing', 'running', 'pause'];
const NON_PRINTING_STATES = ['idle', 'offline', 'unknown'];
const PRINTING_PROCESS_STATES = [
  'heatbed_preheating',
  'heating_hotend',
  'checking_extruder_temperature',
  'auto_bed_leveling',
  'scanning_bed_surface',
  'inspecting_first_layer',
  'calibrating_extrusion',
  'calibrating_extrusion_flow'
];

export const isPrinting = (hass, config) => {
  const currentStage = hass.states[config.stage]?.state;
  const printStatus = hass.states[config.status]?.state;
  
  if (PRINTING_STATES.includes(printStatus)) return true;
  if (NON_PRINTING_STATES.includes(currentStage)) return false;
  if (currentStage === 'printing' || (typeof currentStage === 'string' && currentStage.startsWith('paused_'))) return true;
  
  return PRINTING_PROCESS_STATES.includes(currentStage);
};

export const isPaused = (hass, config) => 
  hass.states[config.status]?.state === 'pause';

export const getAmsSlots = (hass, config) => {
  // Build list of AMS slot entity ids. Only accept `config.ams_slots` array.
  // Each item may be a string entity id or an object like { entity: 'sensor.x' }.
  let amsSlotEntities = [];
  if (Array.isArray(config?.ams_slots)) {
    amsSlotEntities = config.ams_slots
      .map(item => {
        if (!item && item !== 0) return null;
        if (typeof item === 'string') return item.trim();
        if (typeof item === 'object' && item.entity) return String(item.entity).trim();
        return null;
      })
      .filter(e => e && e !== '');
  }

  // If no AMS slot entities are defined, return empty array
  if (amsSlotEntities.length === 0) {
    return [];
  }

  // Process AMS slots if they exist
  const processedSlots = amsSlotEntities
    .map(entityId => {
      const state = hass.states[entityId];
      if (!state) return null;

      return {
        type: state.state || 'Empty',
        color: state.attributes?.color || '#E0E0E0',
        empty: !!state.attributes?.empty,
        active: !!state.attributes?.active,
        name: state.attributes?.name || state.attributes?.friendly_name || 'Unknown',
        entity: entityId
      };
    })
    .filter(Boolean);

  return processedSlots.length > 0 ? processedSlots : [];
};

const getLastPrintName = (hass, config) => {
  const printStatus = hass.states[config.status]?.state;
  const taskName = hass.states[config.model.name]?.state;
  
  return ['idle', 'finish'].includes(printStatus) && 
         taskName && 
         !['unavailable', 'unknown'].includes(taskName) 
    ? taskName 
    : null;
};

export const showElement = (hass, config) => {
  const getState = (configValue, defaultValue = true) => {
    if (configValue === undefined || configValue === null) return defaultValue;
    const norm = String(configValue).trim().toLowerCase();
    if (norm === '' || norm === 'null' || norm === 'undefined') return defaultValue;
    return ['true', '1', 'yes'].includes(norm);
  };

  // Guard access to config.show (may be undefined)
  const show = config?.show || {};

  return {
    title: getState(show.title),
    camera: getState(show.camera),
    control: getState(show.control),
    ams_slots: getState(show.ams_slots)
  };
}

export const getEntityStates = (hass, config) => {
  const getState = (entity, defaultValue = '0') => 
    hass.states[entity]?.state || defaultValue;

  // Guard access
  const control = config?.control || {};
  const camera = config?.camera || {};
  const layers = config?.layers || {};
  const temperature = config?.temperature || {};
  const ams = config?.ams || {};
  const model = config?.model || {};

  return {
    name: config.title || 'Unnamed Printer',

    status: getState(config.status, 'idle'),
    currentStage: getState(config.stage, 'unknown'),

    progress: parseFloat(getState(config.progress)),
    remainingTime: parseInt(parseFloat(getState(config.remaining_time)) * 60),

    speedProfile: getState(config.speed_profile, 'standard'),
    speed_profile: config.speed_profile,

    isPrinting: isPrinting(hass, config),
    isPaused: isPaused(hass, config),

    resume_button: control.resume_button,
    pause_button: control.pause_button,
    stop_button: control.stop_button,
    chamber_light_entity: control.chamber_light,
    aux_fan_entity: control.fan && hass.states[control.fan] ? control.fan : null,

    camera_entity: camera.entity,

    currentLayer: parseInt(getState(layers.current_layer)),
    totalLayers: parseInt(getState(layers.total_layers)),

    bed_temp_entity: temperature.bed,
    nozzle_temp_entity: temperature.nozzle,
    bed_target_temp_entity: temperature.bed_number,
    nozzle_target_temp_entity: temperature.nozzle_number,
    bed_temp: parseFloat(getState(temperature.bed)),
    nozzle_temp: parseFloat(getState(temperature.nozzle)),

    ams_temp: parseFloat(getState(ams.temperature)),
    ams_humidity: parseFloat(getState(ams.humidity)),

    cover_image_entity: model.preview,
    print_weight_entity: parseInt(getState(model.weight)),
    print_length_entity: parseInt(getState(model.length)),
    taskName: getState(model.name, 'No active print'),
    lastPrintName: getLastPrintName(hass, config)
  };
};