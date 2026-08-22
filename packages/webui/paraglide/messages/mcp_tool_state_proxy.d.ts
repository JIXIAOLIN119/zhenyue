/**
* | output |
* | --- |
* | "Proxy" |
*
* @param {Mcp_Tool_State_ProxyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_tool_state_proxy: ((inputs?: Mcp_Tool_State_ProxyInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Tool_State_ProxyInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Tool_State_ProxyInputs = {};
