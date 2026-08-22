/**
* | output |
* | --- |
* | "Create Agent" |
*
* @param {Create_AgentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const create_agent: ((inputs?: Create_AgentInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Create_AgentInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Create_AgentInputs = {};
