/**
* | output |
* | --- |
* | "Select API Protocol" |
*
* @param {Select_Api_ProtocolInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_api_protocol: ((inputs?: Select_Api_ProtocolInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Select_Api_ProtocolInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Select_Api_ProtocolInputs = {};
