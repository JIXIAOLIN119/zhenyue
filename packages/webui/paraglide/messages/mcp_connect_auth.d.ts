/**
* | output |
* | --- |
* | "Connect Account" |
*
* @param {Mcp_Connect_AuthInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_connect_auth: ((inputs?: Mcp_Connect_AuthInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Connect_AuthInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Connect_AuthInputs = {};
