/**
* | output |
* | --- |
* | "Save Configuration" |
*
* @param {Save_ConfigurationInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const save_configuration: ((inputs?: Save_ConfigurationInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Save_ConfigurationInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Save_ConfigurationInputs = {};
