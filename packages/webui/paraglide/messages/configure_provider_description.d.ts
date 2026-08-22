/**
* | output |
* | --- |
* | "Configure authentication and model details for your AI provider." |
*
* @param {Configure_Provider_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const configure_provider_description: ((inputs?: Configure_Provider_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Configure_Provider_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Configure_Provider_DescriptionInputs = {};
