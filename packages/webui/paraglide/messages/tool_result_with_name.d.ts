/**
* | output |
* | --- |
* | "Tool Result: {name}" |
*
* @param {Tool_Result_With_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const tool_result_with_name: ((inputs: Tool_Result_With_NameInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Tool_Result_With_NameInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Tool_Result_With_NameInputs = {
    name: NonNullable<unknown>;
};
