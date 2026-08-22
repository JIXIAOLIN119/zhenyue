/**
* | output |
* | --- |
* | "Configure which tools the agent is permitted to use." |
*
* @param {Agent_Tools_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_tools_description: ((inputs?: Agent_Tools_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agent_Tools_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agent_Tools_DescriptionInputs = {};
