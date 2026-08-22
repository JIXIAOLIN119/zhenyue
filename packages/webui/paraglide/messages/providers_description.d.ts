/**
* | output |
* | --- |
* | "Configure AI providers and their models for this team." |
*
* @param {Providers_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const providers_description: ((inputs?: Providers_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Providers_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Providers_DescriptionInputs = {};
