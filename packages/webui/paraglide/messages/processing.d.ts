/**
* | output |
* | --- |
* | "Processing..." |
*
* @param {ProcessingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const processing: ((inputs?: ProcessingInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<ProcessingInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type ProcessingInputs = {};
