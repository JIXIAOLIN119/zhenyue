/**
* | output |
* | --- |
* | "Cover Preview" |
*
* @param {Cover_PreviewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const cover_preview: ((inputs?: Cover_PreviewInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Cover_PreviewInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Cover_PreviewInputs = {};
