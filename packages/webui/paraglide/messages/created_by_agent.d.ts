/**
* | output |
* | --- |
* | "Created by Agent" |
*
* @param {Created_By_AgentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const created_by_agent: ((inputs?: Created_By_AgentInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Created_By_AgentInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Created_By_AgentInputs = {};
