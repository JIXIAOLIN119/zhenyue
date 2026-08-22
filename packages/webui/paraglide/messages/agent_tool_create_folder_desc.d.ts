/**
* | output |
* | --- |
* | "Allows the agent to create new folders in ZhenYue." |
*
* @param {Agent_Tool_Create_Folder_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_tool_create_folder_desc: ((inputs?: Agent_Tool_Create_Folder_DescInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agent_Tool_Create_Folder_DescInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agent_Tool_Create_Folder_DescInputs = {};
