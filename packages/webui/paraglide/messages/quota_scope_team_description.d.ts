/**
* | output |
* | --- |
* | "Applies collectively to the entire team" |
*
* @param {Quota_Scope_Team_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_scope_team_description: ((inputs?: Quota_Scope_Team_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_Scope_Team_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_Scope_Team_DescriptionInputs = {};
