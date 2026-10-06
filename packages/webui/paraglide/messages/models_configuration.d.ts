/**
* | output |
* | --- |
* | "Models Configuration" |
*
* @param {Models_ConfigurationInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const models_configuration: ((inputs?: Models_ConfigurationInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Models_ConfigurationInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Models_ConfigurationInputs = {};
