// src/styles/card-styles.js
import { css } from 'lit';

export const cardStyles = css`
  /* Print preview */
  .preview-image {
    flex-shrink: 0;
    width: 100px;
    border-radius: 8px;
    overflow: hidden;
    background: var(--secondary-background-color);
    align-self: stretch;
    cursor: pointer;
  }

  .preview-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .print-preview {
    display: flex;
    gap: 8px;
    align-items: stretch;
    min-height: 100px;
  }

  .print-details {
    flex-grow: 1;
    padding: 0 8px;
  }

  .print-details h3 {
    margin: 0 0 4px 0;
    font-size: 16px;
    color: var(--primary-text-color);
    white-space: normal;
    overflow-wrap: break-word;
    word-wrap: break-word;
    line-height: 1.4;
  }

  .print-details .print-stats {
    margin: 0 0 8px 0;
    font-size: 14px;
    color: var(--secondary-text-color);
  }

  /* Card Layout */
  .card {
    background: var(--ha-card-background, var(--card-background-color));
    border-radius: var(--ha-card-border-radius, 12px);
    padding: 16px;
    font-family: var(--primary-font-family, -apple-system, BlinkMacSystemFont, sans-serif);
    position: relative;
    overflow: hidden;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .printer-name {
    font-size: 24px;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .status {
    color: var(--state-active-color);
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .progress-text {
    color: var(--secondary-text-color);
    font-size: 14px;
    font-weight: 400;
    opacity: 0.9;
  }

  .header-controls {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  /* Control Buttons */
  .icon-button {
    background: none;
    border: none;
    padding: 8px;
    border-radius: 50%;
    cursor: pointer;
    color: var(--secondary-text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }

  .icon-button:hover {
    background: var(--secondary-background-color);
  }

  .icon-button.active {
    color: var(--state-active-color);
  }

  .icon-button ha-icon {
    width: 24px;
    height: 24px;
  }

  /* Camera Feed */
  .camera-feed {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 16px;
    position: relative;
    cursor: pointer;
    background: var(--secondary-background-color);
    overflow: hidden;
  }

  .offline-message {
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 8px;
    margin-bottom: 16px;
    background: var(--secondary-background-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--secondary-text-color);
    gap: 8px;
  }

  .camera-label {
    position: absolute;
    top: 4px;
    left: 4px;
    color: var(--secondary-text-color);
    padding: 4px 8px;
    border-radius: 8px;
    font-size: 16px;
    background-color: color-mix(in srgb, var(--card-background-color) 80%, transparent);
  }

  /* Print Status */
  .print-status {
    background: var(--ha-card-background);
    padding: 16px 0;
    margin-bottom: 16px;
  }

  .not-printing {
    background: var(--ha-card-background);
    padding: 24px;
    margin-bottom: 16px;
    text-align: center;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .not-printing .message {
    color: var(--secondary-text-color);
    font-size: 16px;
    font-weight: 500;
  }

  .not-printing .last-print {
    color: var(--secondary-text-color);
    font-size: 14px;
    opacity: 0.8;
  }

  .layer-info {
    color: var(--secondary-text-color);
    font-size: 14px;
  }

  .progress-bar {
    height: 4px;
    background: var(--secondary-background-color);
    border-radius: 2px;
    margin: 4px 0;
  }

  .progress-fill {
    width: 0%;
    height: 100%;
    background: var(--state-active-color);
    border-radius: 2px;
    transition: width 0.3s;
  }

  /* Control Buttons */
  .controls {
    display: flex;
    gap: 8px;
    margin-top: 8px;
  }

  .btn {
    padding: 8px 24px;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
  }

  .btn-pause {
    background: var(--secondary-background-color);
    color: var(--primary-text-color);
  }

  .btn-stop {
    background: var(--error-color);
    color: var(--text-primary-color);
  }

  /* Temperature Display */
  .temperatures {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 32px;
    padding-bottom: 32px;
    position: relative;
  }

  .temperatures::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 20%;
    right: 20%;
    height: 1px;
    background-color: var(--divider-color);
  }

  .temp-item {
    text-align: center;
    color: var(--primary-text-color);
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    padding: 12px;
    border-radius: 12px;
    transition: background-color 0.2s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .temp-item:hover {
    background-color: var(--secondary-background-color);
  }

  .temp-item:active {
    background-color: var(--primary-color);
    opacity: 0.8;
  }

  .temp-value {
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 4px;
  }

  /* Dialog Styles */
  .dialog-content {
    padding: 20px;
    min-width: 300px;
    box-sizing: border-box;
  }

  ha-dialog {
    --mdc-dialog-min-width: 320px;
    --mdc-dialog-max-width: 480px;
    --ha-dialog-border-radius: 12px;
    --dialog-content-padding: 0;
  }

  .temp-input {
    display: block;
    width: 100%;
    margin: 8px 0;
  }

  .speed-select {
    display: block;
    width: 100%;
    margin: 8px 0;
  }

  .range-limits {
    color: var(--secondary-text-color);
    font-size: 14px;
    margin-top: 8px;
    text-align: center;
  }

  mwc-button.save-button {
    --mdc-theme-primary: var(--primary-color);
  }

  mwc-button.cancel-button {
    --mdc-theme-primary: var(--secondary-text-color);
  }

  ha-textfield {
    width: 100%;
  }

  ha-select {
    width: 100%;
  }

  /* Materials */
  .materials {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    gap: 16px;
    padding: 16px;
  }

  .material-slot {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    text-align: center;
  }

  .material-circle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid var(--divider-color);
    position: relative;
    transition: transform 0.3s ease;
  }

  .material-circle.active {
    transform: scale(1.1);
    box-shadow: 0 0 0 2px var(--primary-background-color),
                0 0 0 4px var(--primary-color);
  }

  .material-type {
    font-size: 12px;
    color: var(--primary-text-color);
    text-align: center;
  }

  .materials-specs {
    display: flex;
    justify-content: space-around;
    width: 100%;
    position: relative;
    margin-bottom: 12px;
  }

  .materials-specs > .specs-item {
    text-align: center;
    color: var(--primary-text-color);
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .materials-specs > .specs-item .value {
    font-size: 20px;
    font-weight: 500;
  }
`;