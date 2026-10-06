/**
* | output |
* | --- |
* | "Template deleted successfully" |
*
* @param {Template_DeletedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const template_deleted: ((inputs?: Template_DeletedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Template_DeletedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Template_DeletedInputs = {};
