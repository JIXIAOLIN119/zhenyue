/**
* | output |
* | --- |
* | "Share Settings" |
*
* @param {Share_SettingsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const share_settings: ((inputs?: Share_SettingsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Share_SettingsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Share_SettingsInputs = {};
