/**
* | output |
* | --- |
* | "Server Instructions" |
*
* @param {Mcp_Server_InstructionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_server_instructions: ((inputs?: Mcp_Server_InstructionsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Server_InstructionsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Server_InstructionsInputs = {};
