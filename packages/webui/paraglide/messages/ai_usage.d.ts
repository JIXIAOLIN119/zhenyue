/**
* | output |
* | --- |
* | "AI Token Usage" |
*
* @param {Ai_UsageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const ai_usage: ((inputs?: Ai_UsageInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Ai_UsageInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Ai_UsageInputs = {};
