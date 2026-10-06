/**
* | output |
* | --- |
* | "Resets in" |
*
* @param {Quota_Period_ResetsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_period_resets: ((inputs?: Quota_Period_ResetsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_Period_ResetsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_Period_ResetsInputs = {};
