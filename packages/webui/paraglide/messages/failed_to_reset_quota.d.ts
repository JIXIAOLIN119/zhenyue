/**
* | output |
* | --- |
* | "Failed to reset quota usage" |
*
* @param {Failed_To_Reset_QuotaInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_reset_quota: ((inputs?: Failed_To_Reset_QuotaInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_To_Reset_QuotaInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_To_Reset_QuotaInputs = {};
