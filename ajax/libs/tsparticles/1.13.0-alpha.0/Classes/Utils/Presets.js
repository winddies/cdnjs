export class Presets {
    static getPreset(preset) {
        return this.presets[preset];
    }
    static addPreset(presetKey, options) {
        if (!this.presets[presetKey]) {
            this.presets[presetKey] = options;
        }
    }
}
Presets.presets = {};
