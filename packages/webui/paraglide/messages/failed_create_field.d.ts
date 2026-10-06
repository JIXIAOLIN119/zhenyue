/**
* | output |
* | --- |
* | "Failed to create field" |
*
* @param {Failed_Create_FieldInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_create_field: ((inputs?: Failed_Create_FieldInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_Create_FieldInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_Create_FieldInputs = {};
