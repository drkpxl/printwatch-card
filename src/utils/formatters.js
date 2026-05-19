import { localize } from './localize';

/**
 * Format remaining time duration into human readable format
 * @param {number} minutes - Duration in minutes
 * @param {object} options - Formatting options
 * @returns {string} Formatted duration string
 */
export const formatDuration = (minutes, options = {}) => {
  const {
    showComplete = true,
    completeText = localize.localize(`ui.card.printwatch.time.complete`)
  } = options;

  if (!minutes || minutes <= 0) {
    return showComplete ? completeText : `0${localize.localize(`ui.card.printwatch.time.minutes`)}`;
  }

  const hours = Math.floor(minutes / 60);
  const mins = Math.floor(minutes % 60);

  if (hours > 0) {
    return `${hours}${localize.localize(`ui.card.printwatch.time.hours`)} ${mins}${localize.localize(`ui.card.printwatch.time.minutes`)}`;
  }
  return `${mins}${localize.localize(`ui.card.printwatch.time.minutes`)}`;
};

/**
 * Calculate and format the end time based on remaining minutes
 * @param {number} remainingMinutes - Remaining time in minutes
 * @param {object} hass - Home Assistant instance
 * @returns {string} Formatted end time
 */
export const formatEndTime = (remainingMinutes, hass) => {
  if (!remainingMinutes || remainingMinutes <= 0 || !hass) {
    return '---';
  }

  try {
    const endTime = new Date(Date.now() + (remainingMinutes * 60000));
    const timeFormat = {
      hour: hass.locale.hour_24 ? '2-digit' : 'numeric',
      minute: '2-digit',
      hour12: !hass.locale.hour_24
    };

    return new Intl.DateTimeFormat(hass.locale.language, timeFormat)
      .format(endTime)
      .toLowerCase()
      .replace(/\s/g, '');
  } catch (error) {
    console.warn('Error formatting end time:', error);
    return '---';
  }
};

/**
 * Format a temperature value with unit
 * @param {number|string} value - Temperature value
 * @param {string} unit - Temperature unit
 * @returns {string} Formatted temperature
 */
export const formatTemperature = (value, unit) => {
  const temp = parseFloat(value);
  if (isNaN(temp)) return '---';
  return `${temp.toFixed(0)}${unit}`;
};