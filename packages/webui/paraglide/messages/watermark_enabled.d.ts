/**
* | output |
* | --- |
* | "Enable Watermark" |
*
* @param {Watermark_EnabledInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const watermark_enabled: ((inputs?: Watermark_EnabledInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Watermark_EnabledInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Watermark_EnabledInputs = {};
