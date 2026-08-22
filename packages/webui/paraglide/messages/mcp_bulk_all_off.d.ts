/**
* | output |
* | --- |
* | "All Off" |
*
* @param {Mcp_Bulk_All_OffInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_bulk_all_off: ((inputs?: Mcp_Bulk_All_OffInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Bulk_All_OffInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Bulk_All_OffInputs = {};
