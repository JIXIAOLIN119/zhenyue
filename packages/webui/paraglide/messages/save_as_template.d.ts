/**
* | output |
* | --- |
* | "Save as Template..." |
*
* @param {Save_As_TemplateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const save_as_template: ((inputs?: Save_As_TemplateInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Save_As_TemplateInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Save_As_TemplateInputs = {};
