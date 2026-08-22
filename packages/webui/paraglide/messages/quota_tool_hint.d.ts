/**
* | output |
* | --- |
* | "Select a specific agent tool to configure its quota limit" |
*
* @param {Quota_Tool_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_tool_hint: ((inputs?: Quota_Tool_HintInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_Tool_HintInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_Tool_HintInputs = {};
