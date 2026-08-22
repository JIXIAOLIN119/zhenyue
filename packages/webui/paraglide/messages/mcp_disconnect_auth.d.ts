/**
* | output |
* | --- |
* | "Disconnect Auth" |
*
* @param {Mcp_Disconnect_AuthInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_disconnect_auth: ((inputs?: Mcp_Disconnect_AuthInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Disconnect_AuthInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Disconnect_AuthInputs = {};
