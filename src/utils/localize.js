// src/utils/formatters.js
/**
 * Format remaining time duration into human readable format
 * @param {number} minutes - Duration in minutes
 * @param {object} options - Formatting options
 * @returns {string} Formatted duration string
 */
export const formatDuration = (minutes, options = {}) => {
  const {
    showComplete = true,
    completeText = 'Complete'
  } = options;

  if (!minutes || minutes <= 0) {
    return showComplete ? completeText : '0m';
  }

  const hours = Math.floor(minutes / 60);
  const mins = Math.floor(minutes % 60);

  if (hours > 0) {
    return `${hours}h ${mins}m`;
  }
  return `${mins}m`;
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
  return `${temp.toFixed(1)}${unit}`;
};

// src/utils/localize.js
// Cache for parsed path results
const pathCache = new Map();

/**
 * Get a nested value from an object using a dot-separated path
 * @param {Object} obj - Object to traverse
 * @param {string} path - Dot-separated path
 * @returns {*} Value at path or undefined
 */
const getNestedValue = (obj, path) => {
  // Check cache first
  const cacheKey = `${path}`;
  if (pathCache.has(cacheKey)) {
    const cached = pathCache.get(cacheKey);
    return cached(obj);
  }

  // Create and cache accessor function
  const parts = path.split('.');
  const accessor = (target) => {
    let current = target;
    for (const part of parts) {
      if (current == null) return undefined;
      current = current[part];
    }
    return current;
  };

  pathCache.set(cacheKey, accessor);
  return accessor(obj);
};

export class Localize {
  constructor() {
    this._strings = new Map();
    this._fallbackLang = 'en';
    this._currentLang = this._fallbackLang;
  }

  /**
   * Load translations for a language
   * @param {string} lang - Language code
   * @param {Object} translations - Translation object
   */
  loadTranslations(lang, translations) {
    this._strings.set(lang, translations);
  }

  /**
   * Get current language
   * @returns {string} Current language code
   */
  get language() {
    const hass = document.querySelector('home-assistant')?.hass;
    if (!hass) return this._fallbackLang;

    // Home Assistant can expose language as `hass.locale.language` or `hass.language`.
    // Also normalize regional variants like "ru-RU" -> "ru" and ensure we only
    // return languages for which translations were loaded; otherwise use fallback.
    const raw = hass.locale?.language || hass.language;
    if (!raw) return this._fallbackLang;

    const lang = String(raw).split(/[-_]/)[0].toLowerCase();
    return this._strings.has(lang) ? lang : this._fallbackLang;
  }

  /**
   * Set fallback language
   * @param {string} lang - Language code
   */
  setFallbackLanguage(lang) {
    this._fallbackLang = lang;
  }

  /**
   * Localize a string with parameters
   * @param {string} key - Translation key
   * @param {Object} params - Parameters for translation
   * @returns {string} Localized string
   */
  localize(key, params = {}) {
    // Try current language
    let translated = getNestedValue(this._strings.get(this.language), key);
    
    // Fallback to default language if needed
    if (translated === undefined && this.language !== this._fallbackLang) {
      translated = getNestedValue(this._strings.get(this._fallbackLang), key);
    }

    // Return key if no translation found
    if (translated === undefined) {
      console.warn(`[${this.language}] No translation found for key: ${key}`);
      return key;
    }

    // Replace parameters
    return translated.replace(/\{(\w+)\}/g, (match, param) => {
      return params[param] !== undefined ? params[param] : match;
    });
  }

  /**
   * Helper method for card strings
   * @param {string} key - Translation key
   * @param {Object} params - Parameters for translation
   * @returns {string} Localized string
   */
  t(key, params = {}) {
    return this.localize(`ui.card.printwatch.${key}`, params);
  }

  /**
   * Helper method for edit card strings
   * @param {string} key - Translation key
   * @param {Object} params - Parameters for translation
   * @returns {string} Localized string
   */
  e(key, params = {}) {
    return this.localize(`ui.card.printwatch_editor.${key}`, params);
  }
}

// Initialize and export singleton
export const localize = new Localize();

// Load default translations
import * as en from '../translations/en.json';
import * as de from '../translations/de.json';
import * as ru from '../translations/ru.json';

localize.loadTranslations('en', en.default || en);
localize.loadTranslations('de', de.default || de);
localize.loadTranslations('ru', ru.default || ru);