/**
* | output |
* | --- |
* | "Expand quota rule" |
*
* @param {Quota_Expand_RuleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_expand_rule: ((inputs?: Quota_Expand_RuleInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_Expand_RuleInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_Expand_RuleInputs = {};
