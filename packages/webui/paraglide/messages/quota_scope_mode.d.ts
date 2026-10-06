/**
* | output |
* | --- |
* | "Target Mode" |
*
* @param {Quota_Scope_ModeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_scope_mode: ((inputs?: Quota_Scope_ModeInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_Scope_ModeInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_Scope_ModeInputs = {};
