/**
* | output |
* | --- |
* | "Upload Watermark Image" |
*
* @param {Upload_Watermark_ImageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const upload_watermark_image: ((inputs?: Upload_Watermark_ImageInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Upload_Watermark_ImageInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Upload_Watermark_ImageInputs = {};
