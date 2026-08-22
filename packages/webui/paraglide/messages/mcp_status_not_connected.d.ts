/**
* | output |
* | --- |
* | "Not Connected" |
*
* @param {Mcp_Status_Not_ConnectedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_status_not_connected: ((inputs?: Mcp_Status_Not_ConnectedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Status_Not_ConnectedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Status_Not_ConnectedInputs = {};
