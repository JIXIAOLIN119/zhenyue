/**
* | output |
* | --- |
* | "Bearer Token" |
*
* @param {Mcp_Bearer_TokenInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_bearer_token: ((inputs?: Mcp_Bearer_TokenInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Bearer_TokenInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Bearer_TokenInputs = {};
