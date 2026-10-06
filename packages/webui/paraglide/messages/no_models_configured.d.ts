/**
* | output |
* | --- |
* | "No models configured" |
*
* @param {No_Models_ConfiguredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_models_configured: ((inputs?: No_Models_ConfiguredInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<No_Models_ConfiguredInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type No_Models_ConfiguredInputs = {};
