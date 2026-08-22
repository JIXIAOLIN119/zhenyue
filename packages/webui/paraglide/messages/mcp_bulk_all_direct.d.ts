/**
* | output |
* | --- |
* | "All Direct" |
*
* @param {Mcp_Bulk_All_DirectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_bulk_all_direct: ((inputs?: Mcp_Bulk_All_DirectInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Bulk_All_DirectInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Bulk_All_DirectInputs = {};
