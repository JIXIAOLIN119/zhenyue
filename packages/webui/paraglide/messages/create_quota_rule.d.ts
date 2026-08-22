/**
* | output |
* | --- |
* | "Create Quota Rule" |
*
* @param {Create_Quota_RuleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const create_quota_rule: ((inputs?: Create_Quota_RuleInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Create_Quota_RuleInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Create_Quota_RuleInputs = {};
