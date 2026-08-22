/**
* | output |
* | --- |
* | "Failed to delete permanently" |
*
* @param {Failed_Delete_PermanentlyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_delete_permanently: ((inputs?: Failed_Delete_PermanentlyInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_Delete_PermanentlyInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_Delete_PermanentlyInputs = {};
