/**
* | output |
* | --- |
* | "Allows the agent to create files in ZhenYue, either by uploading a local file or by providing the file name and content directly." |
*
* @param {Agent_Tool_Create_File_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_tool_create_file_desc: ((inputs?: Agent_Tool_Create_File_DescInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agent_Tool_Create_File_DescInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agent_Tool_Create_File_DescInputs = {};
