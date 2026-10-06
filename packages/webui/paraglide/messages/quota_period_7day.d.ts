/**
* | output |
* | --- |
* | "7 Days" |
*
* @param {Quota_Period_7dayInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_period_7day: ((inputs?: Quota_Period_7dayInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_Period_7dayInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_Period_7dayInputs = {};
