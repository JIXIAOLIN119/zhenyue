/**
* | output |
* | --- |
* | "Add Quota" |
*
* @param {Add_QuotaInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_quota: ((inputs?: Add_QuotaInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Add_QuotaInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Add_QuotaInputs = {};
