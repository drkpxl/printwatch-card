import { html } from 'lit';
import { localize } from '../../utils/localize';

export const cameraFeedTemplate = ({ isOnline, hasError, currentStage, entityPicture, onError, onLoad, hass, cameraEntity, handlePopup }) => {
  if (!isOnline || hasError) {
    return html`
      <div class="offline-message">
        <ha-icon icon="mdi:printer-off"></ha-icon>
        <span>
          ${isOnline ? localize.t('camera_unavailable') : localize.t('printer_offline')}
        </span>
      </div>
    `;
  }

  const isHaCamera = cameraEntity && cameraEntity?.startsWith('camera.');

  if (isHaCamera) {
    const stateObj = hass?.states?.[cameraEntity];

    if (!stateObj) {
      return html`
        <div class="offline-message">
          <ha-icon icon="mdi:cctv-off"></ha-icon>
          <span>${localize.t('camera_unavailable')}</span>
        </div>
      `;
    }

    return html`
      <div class="camera-feed" @click=${e => handlePopup(e, cameraEntity)}>
        <div class="camera-label">${localize.localize(`entity.sensor.state.${currentStage}`)}</div>
        <ha-camera-stream
          .hass=${hass}
          .stateObj=${stateObj}
          .controls=${false}
          .muted=${true}
          style="width: 100%; height: 100%; display: block; border-radius: 12px;"
        ></ha-camera-stream>
      </div>
    `;
  } else {
    return html`
      <div class="camera-feed" @click=${e => handlePopup(e, cameraEntity)}>
        <div class="camera-label">${localize.localize(`entity.sensor.state.${currentStage}`)}</div>
        <img
          src="${entityPicture}"
          style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;"
          alt="Camera Feed"
          @error=${onError}
          @load=${onLoad}
        />
      </div>
    `;
  }
};