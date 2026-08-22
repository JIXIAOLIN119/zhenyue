/**
* | output |
* | --- |
* | "Tool: {value}" |
*
* @param {Quota_Target_ToolInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_target_tool: ((inputs: Quota_Target_ToolInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_Target_ToolInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_Target_ToolInputs = {
    value: NonNullable<unknown>;
};
