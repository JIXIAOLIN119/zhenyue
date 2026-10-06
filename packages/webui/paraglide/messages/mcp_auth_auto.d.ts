/**
* | output |
* | --- |
* | "Auto-Detect (Default)" |
*
* @param {Mcp_Auth_AutoInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_auth_auto: ((inputs?: Mcp_Auth_AutoInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Auth_AutoInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Auth_AutoInputs = {};
