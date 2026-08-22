/**
* | output |
* | --- |
* | "Failed to load settings." |
*
* @param {Failed_Load_SettingsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_load_settings: ((inputs?: Failed_Load_SettingsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_Load_SettingsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_Load_SettingsInputs = {};
