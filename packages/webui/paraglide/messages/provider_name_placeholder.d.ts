/**
* | output |
* | --- |
* | "e.g., My OpenAI" |
*
* @param {Provider_Name_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const provider_name_placeholder: ((inputs?: Provider_Name_PlaceholderInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Provider_Name_PlaceholderInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Provider_Name_PlaceholderInputs = {};
