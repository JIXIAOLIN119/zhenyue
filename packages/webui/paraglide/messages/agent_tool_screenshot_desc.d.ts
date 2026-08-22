/**
* | output |
* | --- |
* | "Allows the agent to extract still image frames from video files for analysis." |
*
* @param {Agent_Tool_Screenshot_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agent_tool_screenshot_desc: ((inputs?: Agent_Tool_Screenshot_DescInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agent_Tool_Screenshot_DescInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agent_Tool_Screenshot_DescInputs = {};
