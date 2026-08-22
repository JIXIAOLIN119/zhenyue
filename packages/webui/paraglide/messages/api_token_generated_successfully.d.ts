/**
* | output |
* | --- |
* | "API token generated successfully" |
*
* @param {Api_Token_Generated_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const api_token_generated_successfully: ((inputs?: Api_Token_Generated_SuccessfullyInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Api_Token_Generated_SuccessfullyInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Api_Token_Generated_SuccessfullyInputs = {};
