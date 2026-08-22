/**
* | output |
* | --- |
* | "Current Usage" |
*
* @param {Quota_Current_UsageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_current_usage: ((inputs?: Quota_Current_UsageInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_Current_UsageInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_Current_UsageInputs = {};
