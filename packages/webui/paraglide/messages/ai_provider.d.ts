/**
* | output |
* | --- |
* | "AI Provider" |
*
* @param {Ai_ProviderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const ai_provider: ((inputs?: Ai_ProviderInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Ai_ProviderInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Ai_ProviderInputs = {};
