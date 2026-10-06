/**
* | output |
* | --- |
* | "High" |
*
* @param {Thinking_HighInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const thinking_high: ((inputs?: Thinking_HighInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Thinking_HighInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Thinking_HighInputs = {};
