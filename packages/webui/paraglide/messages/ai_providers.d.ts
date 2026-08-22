/**
* | output |
* | --- |
* | "AI Providers" |
*
* @param {Ai_ProvidersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const ai_providers: ((inputs?: Ai_ProvidersInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Ai_ProvidersInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Ai_ProvidersInputs = {};
