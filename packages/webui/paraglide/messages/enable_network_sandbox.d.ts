/**
* | output |
* | --- |
* | "Enable Network Sandbox" |
*
* @param {Enable_Network_SandboxInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const enable_network_sandbox: ((inputs?: Enable_Network_SandboxInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Enable_Network_SandboxInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Enable_Network_SandboxInputs = {};
