import { LitElement, html, css } from 'lit';
import { localize } from '../utils/localize';

class PrintwatchCardEditor extends LitElement {
    static properties = {
        hass: { type: Object },
        _config: { state: true }
    };

    static styles = css`
        :host {
            display: block;
        }

        .section {
            margin-bottom: 24px;
            border-radius: 12px;
            box-shadow: var(--ha-card-box-shadow);
        }

        .section-title {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 12px;
            color: var(--primary-text-color);
        }

        ha-textfield,
        ha-entity-picker {
            display: block;
            margin-bottom: 16px;
        }

        .hint {
            font-size: 12px;
            color: var(--secondary-text-color);
            margin-top: -8px;
            margin-bottom: 12px;
        }
    `;

    setConfig(config) {
        this._config = { ...(config || {}) };
    }

    _fireConfigChanged(config) {
        this.dispatchEvent(
            new CustomEvent('config-changed', {
                detail: { config },
                bubbles: true,
                composed: true
            })
        );
    }

    _updateKey(key, value) {
        const newConfig = { ...this._config, [key]: value };
        this._config = newConfig;
        this._fireConfigChanged(newConfig);
    }

    _updateNested(path, value) {
        const newConfig = structuredClone(this._config || {});
        let target = newConfig;

        if (typeof path === 'string' && path) path = path.split('.');

        for (let i = 0; i < path.length - 1; i++) {
            target[path[i]] = target[path[i]] ?? {};
            target = target[path[i]];
        }

        target[path[path.length - 1]] = value;

        this._config = newConfig;
        this._fireConfigChanged(newConfig);
    }

    render() {
        const config = this._config || {};
        const cameraConfig = this._config?.camera || {};
        const controlConfig = this._config?.control || {};
        const layersConfig = this._config?.layers || {};
        const temperatureConfig = this._config?.temperature || {};
        const modelConfig = this._config?.model || {};
        const amsSlots = this._config?.ams_slots || [];
        const amsConfig = this._config?.ams || {};

        return html`
            <div class="section">
                <div class="section-title">${localize.e('general.label')}</div>

                <ha-textfield
                    label="${localize.e('general.title')}"
                    .value=${config.title || ''}
                    @input=${e => this._updateKey('title', e.detail.value ?? e.target.value)}
                ></ha-textfield>

                <ha-entity-picker
                    label="${localize.e('general.status')}"
                    .hass=${this.hass}
                    .value=${config.status || ''}
                    .includeDomains=${['sensor']}
                    allow-custom-entity
                    @value-changed=${e => this._updateKey('status', e.detail.value ?? e.target.value)}
                ></ha-entity-picker>

                <ha-entity-picker
                    label="${localize.e('general.stage')}"
                    .hass=${this.hass}
                    .value=${config.stage || ''}
                    .includeDomains=${['sensor']}
                    allow-custom-entity
                    @value-changed=${e => this._updateKey('stage', e.detail.value ?? e.target.value)}
                ></ha-entity-picker>

                <ha-entity-picker
                    label="${localize.e('general.progress')}"
                    .hass=${this.hass}
                    .value=${config.progress || ''}
                    .includeDomains=${['sensor']}
                    allow-custom-entity
                    @value-changed=${e => this._updateKey('progress', e.detail.value ?? e.target.value)}
                ></ha-entity-picker>

                <ha-entity-picker
                    label="${localize.e('general.remaining_time')}"
                    .hass=${this.hass}
                    .value=${config.remaining_time || ''}
                    .includeDomains=${['sensor']}
                    allow-custom-entity
                    @value-changed=${e => this._updateKey('remaining_time', e.detail.value ?? e.target.value)}
                ></ha-entity-picker>

                <ha-entity-picker
                    label="${localize.e('general.speed_profile')}"
                    .hass=${this.hass}
                    .value=${config.speed_profile || ''}
                    .includeDomains=${['select']}
                    allow-custom-entity
                    @value-changed=${e => this._updateKey('speed_profile', e.detail.value ?? e.target.value)}
                ></ha-entity-picker>

            </div>

            <div class="section">
                <div class="section-title">${localize.e('camera.label')}</div>

                <ha-entity-picker
                    label="${localize.e('camera.entity')}"
                    .hass=${this.hass}
                    .value=${cameraConfig.entity ?? ''}
                    .includeDomains=${['camera', 'image']}
                    allow-custom-entity
                    @value-changed=${e => this._updateNested('camera.entity', e.detail.value ?? e.target.value)}
                ></ha-entity-picker>
                <div class="hint">${localize.e('camera.hint.entity')}</div>

                <ha-textfield
                    label="${localize.e('camera.refresh_rate')}"
                    .value=${cameraConfig.refresh_rate ?? '1000'}
                    @input=${e => this._updateNested('camera.refresh_rate', e.detail.value ?? e.target.value)}
                ></ha-textfield>
                <div class="hint">${localize.e('camera.hint.refresh_rate')}</div>
            </div>

            <div class="section">
                <div class="section-title">${localize.e('control.label')}</div>
                <ha-entity-picker
                    label="${localize.e('control.resume')}"
                    .hass=${this.hass}
                    .value=${controlConfig.resume_button ?? ''}
                    .includeDomains=${['button']}
                    allow-custom-entity
                    @value-changed=${e => this._updateNested('control.resume_button', e.detail.value ?? e.target.value)}
                ></ha-entity-picker>

                <ha-entity-picker
                    label="${localize.e('control.pause')}"
                    .hass=${this.hass}
                    .value=${controlConfig.pause_button ?? ''}
                    .includeDomains=${['button']}
                    allow-custom-entity
                    @value-changed=${e => this._updateNested('control.pause_button', e.detail.value ?? e.target.value)}
                ></ha-entity-picker>

                <ha-entity-picker
                    label="${localize.e('control.stop')}"
                    .hass=${this.hass}
                    .value=${controlConfig.stop_button ?? ''}
                    .includeDomains=${['button']}
                    allow-custom-entity
                    @value-changed=${e => this._updateNested('control.stop_button', e.detail.value ?? e.target.value)}
                ></ha-entity-picker>
                
            </div>

            <div class="section">
                <div class="section-title">${localize.e('layers.label')}</div>

                <ha-entity-picker
                    label="${localize.e('layers.current_layer')}"
                    .hass=${this.hass}
                    .value=${layersConfig.current_layer ?? ''}
                    .includeDomains=${['sensor']}
                    allow-custom-entity
                    @value-changed=${e => this._updateNested('layers.current_layer', e.detail.value ?? e.target.value)}
                ></ha-entity-picker>

                <ha-entity-picker
                    label="${localize.e('layers.total_layers')}"
                    .hass=${this.hass}
                    .value=${layersConfig.total_layers ?? ''}
                    .includeDomains=${['sensor']}
                    allow-custom-entity
                    @value-changed=${e => this._updateNested('layers.total_layers', e.detail.value ?? e.target.value)}
                ></ha-entity-picker>
                
            </div>

            <div class="section">
                <div class="section-title">${localize.e('model.label')}</div>

                <ha-entity-picker
                    label="${localize.e('model.name')}"
                    .hass=${this.hass}
                    .value=${modelConfig.name ?? ''}
                    .includeDomains=${['sensor']}
                    allow-custom-entity
                    @value-changed=${e => this._updateNested('model.name', e.detail.value ?? e.target.value)}
                ></ha-entity-picker>

                <ha-entity-picker
                    label="${localize.e('model.preview')}"
                    .hass=${this.hass}
                    .value=${modelConfig.preview ?? ''}
                    .includeDomains=${['image']}
                    allow-custom-entity
                    @value-changed=${e => this._updateNested('model.preview', e.detail.value ?? e.target.value)}
                ></ha-entity-picker>

                <ha-entity-picker
                    label="${localize.e('model.length')}"
                    .hass=${this.hass}
                    .value=${modelConfig.length ?? ''}
                    .includeDomains=${['sensor']}
                    allow-custom-entity
                    @value-changed=${e => this._updateNested('model.length', e.detail.value ?? e.target.value)}
                ></ha-entity-picker>

                <ha-entity-picker
                    label="${localize.e('model.weight')}"
                    .hass=${this.hass}
                    .value=${modelConfig.weight ?? ''}
                    .includeDomains=${['sensor']}
                    allow-custom-entity
                    @value-changed=${e => this._updateNested('model.weight', e.detail.value ?? e.target.value)}
                ></ha-entity-picker>
                
            </div>

            <div class="section">
                <div class="section-title">${localize.e('temperature.label')}</div>

                <ha-entity-picker
                    label="${localize.e('temperature.bed')}"
                    .hass=${this.hass}
                    .value=${temperatureConfig.bed ?? ''}
                    .includeDomains=${['sensor']}
                    allow-custom-entity
                    @value-changed=${e => this._updateNested('temperature.bed', e.detail.value ?? e.target.value)}
                ></ha-entity-picker>

                <ha-entity-picker
                    label="${localize.e('temperature.bed_number')}"
                    .hass=${this.hass}
                    .value=${temperatureConfig.bed_number ?? ''}
                    .includeDomains=${['number']}
                    allow-custom-entity
                    @value-changed=${e => this._updateNested('temperature.bed_number', e.detail.value ?? e.target.value)}
                ></ha-entity-picker>

                <ha-entity-picker
                    label="${localize.e('temperature.nozzle')}"
                    .hass=${this.hass}
                    .value=${temperatureConfig.nozzle ?? ''}
                    .includeDomains=${['sensor']}
                    allow-custom-entity
                    @value-changed=${e => this._updateNested('temperature.nozzle', e.detail.value ?? e.target.value)}
                ></ha-entity-picker>

                <ha-entity-picker
                    label="${localize.e('temperature.nozzle_number')}"
                    .hass=${this.hass}
                    .value=${temperatureConfig.nozzle_number ?? ''}
                    .includeDomains=${['number']}
                    allow-custom-entity
                    @value-changed=${e => this._updateNested('temperature.nozzle_number', e.detail.value ?? e.target.value)}
                ></ha-entity-picker>
                
            </div>

            <div class="section">
                <div class="section-title">${localize.e('filament.label')}</div>

                <ha-entity-picker
                    label="${localize.e('filament.temperature')}"
                    .hass=${this.hass}
                    .value=${amsConfig.temperature ?? ''}
                    .includeDomains=${['sensor']}
                    allow-custom-entity
                    @value-changed=${e => this._updateNested('temperature.temperature', e.detail.value ?? e.target.value)}
                ></ha-entity-picker>

                <ha-entity-picker
                    label="${localize.e('filament.humidity')}"
                    .hass=${this.hass}
                    .value=${amsConfig.humidity ?? ''}
                    .includeDomains=${['sensor']}
                    allow-custom-entity
                    @value-changed=${e => this._updateNested('temperature.humidity', e.detail.value ?? e.target.value)}
                ></ha-entity-picker>

                <ha-form
                    .hass=${this.hass}
                    label="${localize.e('filament.spools')}"
                    .data=${config}
                    .schema=${[
                        {
                            name: 'ams_slots',
                            label: false,
                            selector: {
                                entity: {
                                    domain: 'sensor',
                                    multiple: true
                                }
                            }
                        }
                    ]}
                    @value-changed=${e => {
                        this._config = e.detail.value;
                        this._fireConfigChanged(this._config);
                    }}
                ></ha-form>
            </div>

            <div class="section">
                <div class="section-title">${localize.e('additional.label')}</div>

                <ha-entity-picker
                    label="${localize.e('additional.chamber_light')}"
                    .hass=${this.hass}
                    .value=${controlConfig.chamber_light ?? ''}
                    .includeDomains=${['switch', 'light']}
                    allow-custom-entity
                    @value-changed=${e => this._updateNested('control.chamber_light', e.detail.value ?? e.target.value)}
                ></ha-entity-picker>

                <ha-entity-picker
                    label="${localize.e('additional.fan')}"
                    .hass=${this.hass}
                    .value=${controlConfig.fan ?? ''}
                    .includeDomains=${['fan']}
                    allow-custom-entity
                    @value-changed=${e => this._updateNested('control.fan', e.detail.value ?? e.target.value)}
                ></ha-entity-picker>
                
            </div>
            `;
    }
}

customElements.define('printwatch-card-editor', PrintwatchCardEditor);