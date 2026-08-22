/**
* | output |
* | --- |
* | "Custom Fields" |
*
* @param {Custom_FieldsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const custom_fields: ((inputs?: Custom_FieldsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Custom_FieldsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Custom_FieldsInputs = {};
