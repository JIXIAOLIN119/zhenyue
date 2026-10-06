/**
* | output |
* | --- |
* | "Scope" |
*
* @param {Mcp_Oauth_ScopeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_oauth_scope: ((inputs?: Mcp_Oauth_ScopeInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Oauth_ScopeInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Oauth_ScopeInputs = {};
