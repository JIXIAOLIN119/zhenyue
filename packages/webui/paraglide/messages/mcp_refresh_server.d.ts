/**
* | output |
* | --- |
* | "Refresh Server" |
*
* @param {Mcp_Refresh_ServerInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_refresh_server: ((inputs?: Mcp_Refresh_ServerInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Refresh_ServerInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Refresh_ServerInputs = {};
