/**
* | output |
* | --- |
* | "Field deleted successfully" |
*
* @param {Field_Deleted_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const field_deleted_successfully: ((inputs?: Field_Deleted_SuccessfullyInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Field_Deleted_SuccessfullyInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Field_Deleted_SuccessfullyInputs = {};
