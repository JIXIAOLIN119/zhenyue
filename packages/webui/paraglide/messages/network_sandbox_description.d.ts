/**
* | output |
* | --- |
* | "Configure domain access controls for the sandboxed agent." |
*
* @param {Network_Sandbox_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const network_sandbox_description: ((inputs?: Network_Sandbox_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Network_Sandbox_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Network_Sandbox_DescriptionInputs = {};
