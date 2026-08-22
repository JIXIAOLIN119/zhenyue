/**
* | output |
* | --- |
* | "5 Hours" |
*
* @param {Quota_Period_5hourInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_period_5hour: ((inputs?: Quota_Period_5hourInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_Period_5hourInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_Period_5hourInputs = {};
