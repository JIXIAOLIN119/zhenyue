/**
* | output |
* | --- |
* | "Failed to update field" |
*
* @param {Failed_Update_FieldInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_update_field: ((inputs?: Failed_Update_FieldInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_Update_FieldInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_Update_FieldInputs = {};
