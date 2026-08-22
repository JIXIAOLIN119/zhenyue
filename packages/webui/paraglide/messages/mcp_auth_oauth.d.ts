/**
* | output |
* | --- |
* | "OAuth 2.0" |
*
* @param {Mcp_Auth_OauthInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_auth_oauth: ((inputs?: Mcp_Auth_OauthInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Auth_OauthInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Auth_OauthInputs = {};
