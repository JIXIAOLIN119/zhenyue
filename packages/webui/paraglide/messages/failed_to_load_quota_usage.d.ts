/**
* | output |
* | --- |
* | "Failed to load quota usage" |
*
* @param {Failed_To_Load_Quota_UsageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_load_quota_usage: ((inputs?: Failed_To_Load_Quota_UsageInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_To_Load_Quota_UsageInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_To_Load_Quota_UsageInputs = {};
