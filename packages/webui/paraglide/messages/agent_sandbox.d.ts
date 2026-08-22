/**
* | output |
* | --- |
* | "Agent Sandbox" |
*
* @param {Agent_SandboxInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_sandbox: ((inputs?: Agent_SandboxInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agent_SandboxInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agent_SandboxInputs = {};
