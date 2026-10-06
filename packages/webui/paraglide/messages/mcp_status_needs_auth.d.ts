/**
* | output |
* | --- |
* | "Needs Authentication" |
*
* @param {Mcp_Status_Needs_AuthInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_status_needs_auth: ((inputs?: Mcp_Status_Needs_AuthInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Status_Needs_AuthInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Status_Needs_AuthInputs = {};
