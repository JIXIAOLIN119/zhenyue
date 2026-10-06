/**
* | output |
* | --- |
* | "Agent Sandbox Settings" |
*
* @param {Agent_Sandbox_SettingsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_sandbox_settings: ((inputs?: Agent_Sandbox_SettingsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agent_Sandbox_SettingsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agent_Sandbox_SettingsInputs = {};
