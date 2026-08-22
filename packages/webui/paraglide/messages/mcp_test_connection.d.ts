/**
* | output |
* | --- |
* | "Test Connection" |
*
* @param {Mcp_Test_ConnectionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_test_connection: ((inputs?: Mcp_Test_ConnectionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Test_ConnectionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Test_ConnectionInputs = {};
