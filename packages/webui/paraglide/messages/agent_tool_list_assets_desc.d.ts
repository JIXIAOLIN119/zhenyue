/**
* | output |
* | --- |
* | "Allows the agent to list folders and browse files in ZhenYue." |
*
* @param {Agent_Tool_List_Assets_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_tool_list_assets_desc: ((inputs?: Agent_Tool_List_Assets_DescInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agent_Tool_List_Assets_DescInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agent_Tool_List_Assets_DescInputs = {};
