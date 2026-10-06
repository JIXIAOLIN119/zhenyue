/**
* | output |
* | --- |
* | "Video Frame Extraction" |
*
* @param {Agent_Tool_Screenshot_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_tool_screenshot_name: ((inputs?: Agent_Tool_Screenshot_NameInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agent_Tool_Screenshot_NameInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agent_Tool_Screenshot_NameInputs = {};
