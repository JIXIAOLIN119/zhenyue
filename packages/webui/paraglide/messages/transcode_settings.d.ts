/**
* | output |
* | --- |
* | "Transcode Settings" |
*
* @param {Transcode_SettingsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const transcode_settings: ((inputs?: Transcode_SettingsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Transcode_SettingsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Transcode_SettingsInputs = {};
