/**
* | output |
* | --- |
* | "Failed to restore" |
*
* @param {Failed_To_RestoreInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_restore: ((inputs?: Failed_To_RestoreInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_To_RestoreInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_To_RestoreInputs = {};
