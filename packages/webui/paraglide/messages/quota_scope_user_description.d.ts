/**
* | output |
* | --- |
* | "Applies exclusively to the selected user" |
*
* @param {Quota_Scope_User_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_scope_user_description: ((inputs?: Quota_Scope_User_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_Scope_User_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_Scope_User_DescriptionInputs = {};
