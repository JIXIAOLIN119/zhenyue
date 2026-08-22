/**
* | output |
* | --- |
* | "Create File" |
*
* @param {Agent_Tool_Create_File_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_tool_create_file_name: ((inputs?: Agent_Tool_Create_File_NameInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agent_Tool_Create_File_NameInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agent_Tool_Create_File_NameInputs = {};
