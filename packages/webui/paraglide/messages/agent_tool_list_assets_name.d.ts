/**
* | output |
* | --- |
* | "Browse ZhenYue" |
*
* @param {Agent_Tool_List_Assets_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_tool_list_assets_name: ((inputs?: Agent_Tool_List_Assets_NameInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agent_Tool_List_Assets_NameInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agent_Tool_List_Assets_NameInputs = {};
