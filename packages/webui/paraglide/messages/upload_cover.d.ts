/**
* | output |
* | --- |
* | "Upload cover" |
*
* @param {Upload_CoverInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const upload_cover: ((inputs?: Upload_CoverInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Upload_CoverInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Upload_CoverInputs = {};
