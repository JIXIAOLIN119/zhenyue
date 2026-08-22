/**
* | output |
* | --- |
* | "1 Day" |
*
* @param {Quota_Period_1dayInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_period_1day: ((inputs?: Quota_Period_1dayInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_Period_1dayInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_Period_1dayInputs = {};
