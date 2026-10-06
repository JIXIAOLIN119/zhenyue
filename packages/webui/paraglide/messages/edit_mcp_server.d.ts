/**
* | output |
* | --- |
* | "Edit MCP Server" |
*
* @param {Edit_Mcp_ServerInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const edit_mcp_server: ((inputs?: Edit_Mcp_ServerInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Edit_Mcp_ServerInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Edit_Mcp_ServerInputs = {};
