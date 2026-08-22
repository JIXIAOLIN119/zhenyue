/**
* | output |
* | --- |
* | "General Settings" |
*
* @param {General_SettingsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const general_settings: ((inputs?: General_SettingsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<General_SettingsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type General_SettingsInputs = {};
