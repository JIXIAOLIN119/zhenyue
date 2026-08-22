/**
* | output |
* | --- |
* | "Client ID" |
*
* @param {Mcp_Oauth_Client_IdInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_oauth_client_id: ((inputs?: Mcp_Oauth_Client_IdInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Oauth_Client_IdInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Oauth_Client_IdInputs = {};
