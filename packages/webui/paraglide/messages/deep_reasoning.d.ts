/**
* | output |
* | --- |
* | "Deep reasoning" |
*
* @param {Deep_ReasoningInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const deep_reasoning: ((inputs?: Deep_ReasoningInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Deep_ReasoningInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Deep_ReasoningInputs = {};
