/**
* | output |
* | --- |
* | "Override the default endpoint." |
*
* @param {Override_Default_EndpointInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const override_default_endpoint: ((inputs?: Override_Default_EndpointInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Override_Default_EndpointInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Override_Default_EndpointInputs = {};
