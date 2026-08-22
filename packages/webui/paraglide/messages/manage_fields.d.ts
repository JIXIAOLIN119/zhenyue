/**
* | output |
* | --- |
* | "Manage Fields" |
*
* @param {Manage_FieldsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const manage_fields: ((inputs?: Manage_FieldsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Manage_FieldsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Manage_FieldsInputs = {};
