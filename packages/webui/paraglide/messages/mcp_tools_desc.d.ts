/**
* | output |
* | --- |
* | "Configure how MCP tools are exposed to the agent. Proxy mode keeps context usage low by hiding tools behind an MCP proxy, while Direct mode exposes selected ..." |
*
* @param {Mcp_Tools_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_tools_desc: ((inputs?: Mcp_Tools_DescInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Tools_DescInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Tools_DescInputs = {};
