/**
* | output |
* | --- |
* | "Global API Protocol" |
*
* @param {Global_Api_ProtocolInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const global_api_protocol: ((inputs?: Global_Api_ProtocolInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Global_Api_ProtocolInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Global_Api_ProtocolInputs = {};
