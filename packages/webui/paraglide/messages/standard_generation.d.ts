/**
* | output |
* | --- |
* | "Standard generation" |
*
* @param {Standard_GenerationInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const standard_generation: ((inputs?: Standard_GenerationInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Standard_GenerationInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Standard_GenerationInputs = {};
