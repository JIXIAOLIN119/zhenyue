/**
* | output |
* | --- |
* | "Generate and manage API tokens. These tokens allow you or your agents to run terminal commands via zhenyue-cli." |
*
* @param {Api_Tokens_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const api_tokens_description: ((inputs?: Api_Tokens_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Api_Tokens_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Api_Tokens_DescriptionInputs = {};
