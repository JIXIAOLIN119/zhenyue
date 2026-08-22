/**
* | output |
* | --- |
* | "Watermark updated successfully" |
*
* @param {Watermark_UpdatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const watermark_updated: ((inputs?: Watermark_UpdatedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Watermark_UpdatedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Watermark_UpdatedInputs = {};
