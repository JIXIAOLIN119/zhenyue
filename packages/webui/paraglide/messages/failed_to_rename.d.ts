/**
* | output |
* | --- |
* | "Failed to rename" |
*
* @param {Failed_To_RenameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_rename: ((inputs?: Failed_To_RenameInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_To_RenameInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_To_RenameInputs = {};
