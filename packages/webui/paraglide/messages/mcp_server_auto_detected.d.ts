/**
* | output |
* | --- |
* | "Name and description are auto-detected from the server after connecting." |
*
* @param {Mcp_Server_Auto_DetectedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_server_auto_detected: ((inputs?: Mcp_Server_Auto_DetectedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Server_Auto_DetectedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Server_Auto_DetectedInputs = {};
