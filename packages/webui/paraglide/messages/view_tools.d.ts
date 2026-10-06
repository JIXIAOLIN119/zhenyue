/**
* | output |
* | --- |
* | "View Tools" |
*
* @param {View_ToolsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const view_tools: ((inputs?: View_ToolsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<View_ToolsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type View_ToolsInputs = {};
