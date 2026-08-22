/**
* | output |
* | --- |
* | "Template saved successfully" |
*
* @param {Template_SavedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const template_saved: ((inputs?: Template_SavedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Template_SavedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Template_SavedInputs = {};
