/**
* | output |
* | --- |
* | "MCP server authenticated successfully" |
*
* @param {Mcp_Auth_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_auth_success: ((inputs?: Mcp_Auth_SuccessInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Auth_SuccessInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Auth_SuccessInputs = {};
