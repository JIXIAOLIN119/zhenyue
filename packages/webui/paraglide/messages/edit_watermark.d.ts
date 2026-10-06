/**
* | output |
* | --- |
* | "Edit Watermark" |
*
* @param {Edit_WatermarkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const edit_watermark: ((inputs?: Edit_WatermarkInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Edit_WatermarkInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Edit_WatermarkInputs = {};
