/**
* | output |
* | --- |
* | "Transcoding watermark media..." |
*
* @param {Watermark_Transcoding_ProcessingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const watermark_transcoding_processing: ((inputs?: Watermark_Transcoding_ProcessingInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Watermark_Transcoding_ProcessingInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Watermark_Transcoding_ProcessingInputs = {};
