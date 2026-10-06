/**
* | output |
* | --- |
* | "Create New Template" |
*
* @param {Create_New_TemplateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const create_new_template: ((inputs?: Create_New_TemplateInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Create_New_TemplateInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Create_New_TemplateInputs = {};
