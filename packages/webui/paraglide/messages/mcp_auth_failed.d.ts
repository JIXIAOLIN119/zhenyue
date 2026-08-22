/**
* | output |
* | --- |
* | "Failed to authenticate MCP server" |
*
* @param {Mcp_Auth_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_auth_failed: ((inputs?: Mcp_Auth_FailedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Auth_FailedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Auth_FailedInputs = {};
