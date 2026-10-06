/**
* | output |
* | --- |
* | "AI Tokens" |
*
* @param {Quota_Resource_Agent_Total_TokensInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_resource_agent_total_tokens: ((inputs?: Quota_Resource_Agent_Total_TokensInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_Resource_Agent_Total_TokensInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_Resource_Agent_Total_TokensInputs = {};
