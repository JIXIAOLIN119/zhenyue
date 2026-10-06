/**
* | output |
* | --- |
* | "Reset Usage" |
*
* @param {Quota_Reset_UsageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_reset_usage: ((inputs?: Quota_Reset_UsageInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_Reset_UsageInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_Reset_UsageInputs = {};
