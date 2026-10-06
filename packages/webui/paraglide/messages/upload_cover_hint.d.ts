/**
* | output |
* | --- |
* | "Drag and drop, or browse. Recommended 1:1 (400×400px)." |
*
* @param {Upload_Cover_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const upload_cover_hint: ((inputs?: Upload_Cover_HintInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Upload_Cover_HintInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Upload_Cover_HintInputs = {};
