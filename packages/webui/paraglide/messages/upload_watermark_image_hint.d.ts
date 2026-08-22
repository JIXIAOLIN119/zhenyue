/**
* | output |
* | --- |
* | "Drag and drop, or browse. Max 1MB." |
*
* @param {Upload_Watermark_Image_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const upload_watermark_image_hint: ((inputs?: Upload_Watermark_Image_HintInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Upload_Watermark_Image_HintInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Upload_Watermark_Image_HintInputs = {};
