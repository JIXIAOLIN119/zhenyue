/**
* | output |
* | --- |
* | "Configured AI Providers" |
*
* @param {Configured_Ai_ProvidersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const configured_ai_providers: ((inputs?: Configured_Ai_ProvidersInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Configured_Ai_ProvidersInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Configured_Ai_ProvidersInputs = {};
