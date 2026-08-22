/**
* | output |
* | --- |
* | "Server refreshed" |
*
* @param {Mcp_Refresh_Server_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_refresh_server_success: ((inputs?: Mcp_Refresh_Server_SuccessInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Refresh_Server_SuccessInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Refresh_Server_SuccessInputs = {};
