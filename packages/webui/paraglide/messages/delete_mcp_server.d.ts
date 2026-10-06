/**
* | output |
* | --- |
* | "Delete MCP Server" |
*
* @param {Delete_Mcp_ServerInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_mcp_server: ((inputs?: Delete_Mcp_ServerInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Delete_Mcp_ServerInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Delete_Mcp_ServerInputs = {};
