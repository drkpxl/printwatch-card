import PrintWatchCard from './components/printwatch-card';
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Ensure global availability of Lit core functions
window.LitElement = LitElement;
window.html = html;
window.css = css;

// Add version and build timestamp to window for debugging
window.PRINTWATCH_VERSION = process.env.VERSION;
window.PRINTWATCH_BUILD_TIME = process.env.BUILD_TIMESTAMP;

// Ensure the element is registered
if (!customElements.get('printwatch-card')) {
  customElements.define('printwatch-card', PrintWatchCard);
}

// Export for potential reuse
export { 
  PrintWatchCard,
  html,
  css,
  LitElement
};