/**
* | output |
* | --- |
* | "Add MCP Server" |
*
* @param {Add_Mcp_ServerInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_mcp_server: ((inputs?: Add_Mcp_ServerInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Add_Mcp_ServerInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Add_Mcp_ServerInputs = {};
