/**
* | output |
* | --- |
* | "Grant Type" |
*
* @param {Mcp_Oauth_Grant_TypeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_oauth_grant_type: ((inputs?: Mcp_Oauth_Grant_TypeInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Oauth_Grant_TypeInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Oauth_Grant_TypeInputs = {};
