/**
* | output |
* | --- |
* | "Monitor AI token consumption and estimated costs for your team and members." |
*
* @param {Ai_Usage_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const ai_usage_description: ((inputs?: Ai_Usage_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Ai_Usage_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Ai_Usage_DescriptionInputs = {};
