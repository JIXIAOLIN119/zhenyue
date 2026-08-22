/**
* | output |
* | --- |
* | "Delete Template" |
*
* @param {Delete_TemplateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_template: ((inputs?: Delete_TemplateInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Delete_TemplateInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Delete_TemplateInputs = {};
