/**
* | output |
* | --- |
* | "Create Folder" |
*
* @param {Agent_Tool_Create_Folder_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_tool_create_folder_name: ((inputs?: Agent_Tool_Create_Folder_NameInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agent_Tool_Create_Folder_NameInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agent_Tool_Create_Folder_NameInputs = {};
