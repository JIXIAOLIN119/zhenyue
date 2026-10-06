/**
* | output |
* | --- |
* | "API token revoked successfully" |
*
* @param {Api_Token_Revoked_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const api_token_revoked_successfully: ((inputs?: Api_Token_Revoked_SuccessfullyInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Api_Token_Revoked_SuccessfullyInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Api_Token_Revoked_SuccessfullyInputs = {};
