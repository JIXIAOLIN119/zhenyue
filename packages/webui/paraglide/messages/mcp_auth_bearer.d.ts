/**
* | output |
* | --- |
* | "Bearer Token" |
*
* @param {Mcp_Auth_BearerInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_auth_bearer: ((inputs?: Mcp_Auth_BearerInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Auth_BearerInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Auth_BearerInputs = {};
