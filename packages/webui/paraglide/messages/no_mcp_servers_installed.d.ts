/**
* | output |
* | --- |
* | "No MCP servers configured" |
*
* @param {No_Mcp_Servers_InstalledInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_mcp_servers_installed: ((inputs?: No_Mcp_Servers_InstalledInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<No_Mcp_Servers_InstalledInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type No_Mcp_Servers_InstalledInputs = {};
