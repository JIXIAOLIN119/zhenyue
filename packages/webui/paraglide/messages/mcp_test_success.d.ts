/**
* | output |
* | --- |
* | "MCP server test successful" |
*
* @param {Mcp_Test_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_test_success: ((inputs?: Mcp_Test_SuccessInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Test_SuccessInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Test_SuccessInputs = {};
