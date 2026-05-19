# PrintWatch Card
> A feature-rich Home Assistant card for monitoring and controlling your P1S 3D printer. Get real-time updates on print progress, temperatures, material status, and more with a sleek, user-friendly interface.

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Latest Release](https://img.shields.io/github/v/release/drkpxl/printwatch-card?label=Latest%20Release)](https://github.com/drkpxl/printwatch-card/releases/latest)
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/default)
[![HACS Validate](https://github.com/drkpxl/printwatch-card/actions/workflows/validate.yaml/badge.svg?branch=main)](https://github.com/drkpxl/printwatch-card/actions/workflows/validate.yaml)
[![Stars](https://img.shields.io/github/stars/drkpxl/printwatch-card?style=flat)](https://github.com/drkpxl/printwatch-card/stargazers)
[![Forks](https://img.shields.io/github/forks/drkpxl/printwatch-card?style=flat)](https://github.com/drkpxl/printwatch-card/forks)


## Features
- 🎥 Live camera feed
  - Uses native HA streaming for `camera.*` entities (e.g. Generic Camera)
  - Uses configurable refresh rate for `image.*` entities
- 📊 Print progress tracking with layer count and estimated completion time
- 🎨 AMS/Material status visualization including current filament and temperature & humidity monitoring
- 💡 Quick controls for chamber light and auxiliary fan
- ⏯️ Print control buttons (pause/resume/stop) with [confirmation dialogs](assets/pause.png)
- 🎛️ Speed profile monitoring and control
- ⚡ Local API (LAN Mode)
- 🌑 Native Theme support
- 🌡️ Real-time temperature monitoring and control for bed and nozzle
- 📷 G-Code preview image (requires HA Bambu Lab plugin update)
- 🏷️ Display print weight and length details
- 🌍 Localization support:
  - 🇺🇸 English
  - 🇷🇺 Russian
  - 🇩🇪 Germany
  - 🇩🇰 Dansk

## Screenshots
### Light Mode 
![PrintWatch Card Screenshot](assets/light-mode.png)

### Dark Mode
![PrintWatch Dark Mode](assets/dark-mode.png)  

## Prerequisites
- Home Assistant
- P1S Printer integration configured in Home Assistant using [ha-bambulab]((https://github.com/greghesp/ha-bambulab)) plugin
- Required entities set up (see Configuration section)
- For streaming: the built-in Home Assistant `stream` integration must be enabled

## Installation

### HACS (Recommended) - Awaiting approval from HACS, follow manual
1. Open HACS in Home Assistant
2. Click on "Frontend" section
3. Click the "+ Explore & Download Repositories" button
4. Search for "PrintWatch Card"
5. Click "Download"
6. Restart Home Assistant

### Manual Installation
1. Navigate to HACS
2. Tap 3 buttons in top right and select custom repositories
3. Paste `https://github.com/drkpxl/printwatch-card` and select `dashboard`
4. Save
5. Select printwatch-card in HACS listing and click download
6. Navigate to settings and install card if needed there.
7. Restart Home Assistant
8. Clear Browser cache if using previous version

## Configuration
Add the card to your dashboard with this basic configuration:


## Configuration
Add the card to your dashboard with this configuration:

```yaml
type: custom:printwatch-card
title: BambuLab A1
online: binary_sensor.a1_online
status: sensor.a1_print_status
stage: sensor.a1_current_stage
progress: sensor.a1_print_progress
remaining_time: sensor.a1_remaining_time
speed_profile: select.a1_printing_speed
control:
    fan: fan.a1_cooling_fan
    pause_button: button.a1_pause_printing
    resume_button: button.a1_resume_printing
    stop_button: button.a1_stop_printing
    chamber_light: switch.bedroom_top
camera:
    refresh_rate: 1000
    entity: image.a1_camera
layers:
    current_layer: sensor.a1_current_layer
    total_layers: sensor.a1_total_layer_count
temperature:
    bed: sensor.a1_bed_temperature
    nozzle: sensor.a1_nozzle_temperature
    bed_number: number.a1_bed_target_temperature
    nozzle_number: number.a1_nozzle_target_temperature
model:
    name: sensor.a1_task_name
    preview: image.a1_cover_image
    weight: sensor.a1_print_weight
    length: sensor.a1_print_length
ams: 
    temperature: sensor.a1_ams_temperature
    humidity: sensor.a1_ams_humidity
ams_slots:
    - sensor.a1_externalspool_external_spool
    - sensor.a1_externalspool_external_spool
```

A block for hiding card elements is also supported (not available in the visual editor):
> By default, all blocks are displayed. Value: `True`
```yaml
show:
    title: false
    camera: false
    control: false
    ams_slots: false
```


## Troubleshooting
### Common Issues
1. **Card not appearing**
   - Check that all required entities exist and are correctly named
   - Verify resources are properly loaded in HA

2. **Camera feed not updating**
   - Ensure camera entity is properly configured
   - Check that image updates are enabled in HA
   - Check that the `online` field in the card is filled in

3. **Controls not working**
   - Verify that your user has proper permissions for the entities
   - Check that button entities are available and not in an error state

4. **G-Code preview not appearing**
   - Ensure you have the latest version of the HA Bambu Lab plugin
   - Enable G-Code preview in the plugin settings
5. **Localization issues**
   - Some translations are AI-generated; if you notice errors, consider submitting improvements!


## Contributing
Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Support
If you're having issues, please:
1. Check the Troubleshooting section above
2. Search existing [GitHub issues](https://github.com/drkpxl/printwatch-card/issues)
3. Create a new issue if your problem isn't already reported

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [Greg Hesp](https://github.com/greghesp/ha-bambulab) maker of [ha-bambulab]((https://github.com/greghesp/ha-bambulab)) without this plugin wouldn't work
- Thanks to all P1S users who provided feedback and testing
- Inspired by the great Home Assistant community

---

If you find this useful I am addicted to good coffee.

<a href="https://www.buymeacoffee.com/drkpxl" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 40px !important;width: 160px !important;" ></a>
