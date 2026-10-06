/**
* | output |
* | --- |
* | "Read Skills" |
*
* @param {Agent_Tool_Read_Skill_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_tool_read_skill_name: ((inputs?: Agent_Tool_Read_Skill_NameInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agent_Tool_Read_Skill_NameInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agent_Tool_Read_Skill_NameInputs = {};
