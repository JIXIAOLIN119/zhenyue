/**
* | output |
* | --- |
* | "Describe the agent's personality, tone, and behavior..." |
*
* @param {Agent_Soul_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_soul_placeholder: ((inputs?: Agent_Soul_PlaceholderInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agent_Soul_PlaceholderInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agent_Soul_PlaceholderInputs = {};
