/**
* | output |
* | --- |
* | "Shared pooled limit across all matching members" |
*
* @param {Quota_Scope_Mode_All_Members_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_scope_mode_all_members_desc: ((inputs?: Quota_Scope_Mode_All_Members_DescInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_Scope_Mode_All_Members_DescInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_Scope_Mode_All_Members_DescInputs = {};
