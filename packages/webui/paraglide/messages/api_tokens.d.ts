/**
* | output |
* | --- |
* | "API Tokens" |
*
* @param {Api_TokensInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const api_tokens: ((inputs?: Api_TokensInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Api_TokensInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Api_TokensInputs = {};
