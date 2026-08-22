/**
* | output |
* | --- |
* | "Tool Result:" |
*
* @param {Tool_ResultInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const tool_result: ((inputs?: Tool_ResultInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Tool_ResultInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Tool_ResultInputs = {};
