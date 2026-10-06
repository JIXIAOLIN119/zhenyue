/**
* | output |
* | --- |
* | "Enter MCP Server ID" |
*
* @param {Enter_Mcp_IdInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const enter_mcp_id: ((inputs?: Enter_Mcp_IdInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Enter_Mcp_IdInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Enter_Mcp_IdInputs = {};
