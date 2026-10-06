/**
* | output |
* | --- |
* | "Delete Permanently" |
*
* @param {Delete_PermanentlyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_permanently: ((inputs?: Delete_PermanentlyInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Delete_PermanentlyInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Delete_PermanentlyInputs = {};
