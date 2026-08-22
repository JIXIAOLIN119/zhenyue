/**
* | output |
* | --- |
* | "No watermark blocks added yet" |
*
* @param {No_Watermark_BlocksInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_watermark_blocks: ((inputs?: No_Watermark_BlocksInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<No_Watermark_BlocksInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type No_Watermark_BlocksInputs = {};
