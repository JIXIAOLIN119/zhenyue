/**
* | output |
* | --- |
* | "Client Secret" |
*
* @param {Mcp_Oauth_Client_SecretInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_oauth_client_secret: ((inputs?: Mcp_Oauth_Client_SecretInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Oauth_Client_SecretInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Oauth_Client_SecretInputs = {};
