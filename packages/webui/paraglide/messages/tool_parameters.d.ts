/**
* | output |
* | --- |
* | "Parameters" |
*
* @param {Tool_ParametersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const tool_parameters: ((inputs?: Tool_ParametersInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Tool_ParametersInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Tool_ParametersInputs = {};
