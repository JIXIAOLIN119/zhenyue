/**
* | output |
* | --- |
* | "Direct" |
*
* @param {Mcp_Tool_State_DirectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_tool_state_direct: ((inputs?: Mcp_Tool_State_DirectInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Tool_State_DirectInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Tool_State_DirectInputs = {};
