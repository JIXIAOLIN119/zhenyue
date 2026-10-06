/**
* | output |
* | --- |
* | "Set limits on AI tokens, costs, skill executions, and agent tool calls to manage team usage." |
*
* @param {No_Quotas_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_quotas_description: ((inputs?: No_Quotas_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<No_Quotas_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type No_Quotas_DescriptionInputs = {};
