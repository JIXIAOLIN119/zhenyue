/**
* | output |
* | --- |
* | "Save Watermark" |
*
* @param {Save_WatermarkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const save_watermark: ((inputs?: Save_WatermarkInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Save_WatermarkInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Save_WatermarkInputs = {};
