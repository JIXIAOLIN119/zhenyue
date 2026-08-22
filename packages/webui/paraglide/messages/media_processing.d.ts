/**
* | output |
* | --- |
* | "Media Processing" |
*
* @param {Media_ProcessingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_processing: ((inputs?: Media_ProcessingInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Media_ProcessingInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Media_ProcessingInputs = {};
