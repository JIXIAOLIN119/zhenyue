/**
* | output |
* | --- |
* | "Quick reasoning" |
*
* @param {Quick_ReasoningInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quick_reasoning: ((inputs?: Quick_ReasoningInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quick_ReasoningInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quick_ReasoningInputs = {};
