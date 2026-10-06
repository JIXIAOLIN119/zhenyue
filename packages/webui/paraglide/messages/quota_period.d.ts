/**
* | output |
* | --- |
* | "Period Window" |
*
* @param {Quota_PeriodInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_period: ((inputs?: Quota_PeriodInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_PeriodInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_PeriodInputs = {};
