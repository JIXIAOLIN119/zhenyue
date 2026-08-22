/**
* | output |
* | --- |
* | "Failed to remove" |
*
* @param {Failed_RemoveInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_remove: ((inputs?: Failed_RemoveInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_RemoveInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_RemoveInputs = {};
