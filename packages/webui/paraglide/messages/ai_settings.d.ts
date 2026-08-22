/**
* | output |
* | --- |
* | "AI Settings" |
*
* @param {Ai_SettingsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const ai_settings: ((inputs?: Ai_SettingsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Ai_SettingsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Ai_SettingsInputs = {};
