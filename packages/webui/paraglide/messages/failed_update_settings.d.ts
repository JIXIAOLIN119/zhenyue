/**
* | output |
* | --- |
* | "Failed to update settings" |
*
* @param {Failed_Update_SettingsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_update_settings: ((inputs?: Failed_Update_SettingsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_Update_SettingsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_Update_SettingsInputs = {};
