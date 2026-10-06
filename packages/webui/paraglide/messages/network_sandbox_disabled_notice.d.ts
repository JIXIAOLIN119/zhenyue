/**
* | output |
* | --- |
* | "Network Sandbox is currently OFF. All outbound network requests from agent scripts are permitted without restrictions." |
*
* @param {Network_Sandbox_Disabled_NoticeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const network_sandbox_disabled_notice: ((inputs?: Network_Sandbox_Disabled_NoticeInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Network_Sandbox_Disabled_NoticeInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Network_Sandbox_Disabled_NoticeInputs = {};
