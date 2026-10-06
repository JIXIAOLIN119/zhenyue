/**
* | output |
* | --- |
* | "Entire Team" |
*
* @param {Quota_Scope_TeamInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_scope_team: ((inputs?: Quota_Scope_TeamInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_Scope_TeamInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_Scope_TeamInputs = {};
