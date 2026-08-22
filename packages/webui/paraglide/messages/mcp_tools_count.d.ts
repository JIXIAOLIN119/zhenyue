/**
* | output |
* | --- |
* | "{count} Tools" |
*
* @param {Mcp_Tools_CountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_tools_count: ((inputs: Mcp_Tools_CountInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_Tools_CountInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_Tools_CountInputs = {
    count: NonNullable<unknown>;
};
