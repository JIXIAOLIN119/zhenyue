/**
* | output |
* | --- |
* | "All Proxy" |
*
* @param {Mcp_Bulk_All_ProxyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_bulk_all_proxy: ((inputs?: Mcp_Bulk_All_ProxyInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Bulk_All_ProxyInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Bulk_All_ProxyInputs = {};
