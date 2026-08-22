/**
* | output |
* | --- |
* | "Arguments" |
*
* @param {Tool_ArgumentsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const tool_arguments: ((inputs?: Tool_ArgumentsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Tool_ArgumentsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Tool_ArgumentsInputs = {};
