/**
* | output |
* | --- |
* | "No usage records found" |
*
* @param {Quota_No_Usage_RecordsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_no_usage_records: ((inputs?: Quota_No_Usage_RecordsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_No_Usage_RecordsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_No_Usage_RecordsInputs = {};
