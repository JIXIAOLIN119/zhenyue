/**
* | output |
* | --- |
* | "Consumed" |
*
* @param {Quota_ConsumedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_consumed: ((inputs?: Quota_ConsumedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_ConsumedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_ConsumedInputs = {};
