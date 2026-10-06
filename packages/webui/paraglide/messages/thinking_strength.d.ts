/**
* | output |
* | --- |
* | "Thinking Strength" |
*
* @param {Thinking_StrengthInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const thinking_strength: ((inputs?: Thinking_StrengthInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Thinking_StrengthInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Thinking_StrengthInputs = {};
