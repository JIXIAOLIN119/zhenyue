/**
* | output |
* | --- |
* | "Transport Protocol" |
*
* @param {Mcp_TransportInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mcp_transport: ((inputs?: Mcp_TransportInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mcp_TransportInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mcp_TransportInputs = {};
