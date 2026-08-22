/**
* | output |
* | --- |
* | "Allows the agent to upload and stack a new version of an existing file in ZhenYue." |
*
* @param {Agent_Tool_Create_Version_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_tool_create_version_desc: ((inputs?: Agent_Tool_Create_Version_DescInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agent_Tool_Create_Version_DescInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agent_Tool_Create_Version_DescInputs = {};
