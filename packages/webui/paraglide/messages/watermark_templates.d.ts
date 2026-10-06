/**
* | output |
* | --- |
* | "Templates" |
*
* @param {Watermark_TemplatesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const watermark_templates: ((inputs?: Watermark_TemplatesInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Watermark_TemplatesInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Watermark_TemplatesInputs = {};
