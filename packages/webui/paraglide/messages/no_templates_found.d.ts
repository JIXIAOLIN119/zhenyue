/**
* | output |
* | --- |
* | "No saved templates" |
*
* @param {No_Templates_FoundInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_templates_found: ((inputs?: No_Templates_FoundInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<No_Templates_FoundInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type No_Templates_FoundInputs = {};
