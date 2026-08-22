/**
* | output |
* | --- |
* | "Watermark disabled" |
*
* @param {Watermark_Disabled_MsgInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const watermark_disabled_msg: ((inputs?: Watermark_Disabled_MsgInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Watermark_Disabled_MsgInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Watermark_Disabled_MsgInputs = {};
