/**
* | output |
* | --- |
* | "Edit Quota Rule" |
*
* @param {Edit_Quota_RuleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const edit_quota_rule: ((inputs?: Edit_Quota_RuleInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Edit_Quota_RuleInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Edit_Quota_RuleInputs = {};
