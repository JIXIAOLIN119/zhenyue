/**
* | output |
* | --- |
* | "Configure resource limits, target scopes, and evaluation periods." |
*
* @param {Edit_Quota_Rule_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const edit_quota_rule_description: ((inputs?: Edit_Quota_Rule_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Edit_Quota_Rule_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Edit_Quota_Rule_DescriptionInputs = {};
