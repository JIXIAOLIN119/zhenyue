/**
* | output |
* | --- |
* | "Quota usage reset successfully" |
*
* @param {Quota_Reset_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_reset_successfully: ((inputs?: Quota_Reset_SuccessfullyInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_Reset_SuccessfullyInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_Reset_SuccessfullyInputs = {};
