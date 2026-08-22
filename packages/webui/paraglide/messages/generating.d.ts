/**
* | output |
* | --- |
* | "Generating..." |
*
* @param {GeneratingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const generating: ((inputs?: GeneratingInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<GeneratingInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type GeneratingInputs = {};
