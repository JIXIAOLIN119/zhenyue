/**
* | output |
* | --- |
* | "Network Sandbox" |
*
* @param {Network_SandboxInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const network_sandbox: ((inputs?: Network_SandboxInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Network_SandboxInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Network_SandboxInputs = {};
