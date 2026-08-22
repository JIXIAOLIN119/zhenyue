/**
* | output |
* | --- |
* | "Sample Media" |
*
* @param {Sample_BackdropInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sample_backdrop: ((inputs?: Sample_BackdropInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Sample_BackdropInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Sample_BackdropInputs = {};
