/**
* | output |
* | --- |
* | "Step-by-step execution trace of the agent's background tasks and tool calls." |
*
* @param {Agent_Logs_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_logs_description: ((inputs?: Agent_Logs_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agent_Logs_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agent_Logs_DescriptionInputs = {};
