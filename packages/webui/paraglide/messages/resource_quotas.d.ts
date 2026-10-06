/**
* | output |
* | --- |
* | "Resource Quotas" |
*
* @param {Resource_QuotasInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const resource_quotas: ((inputs?: Resource_QuotasInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Resource_QuotasInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Resource_QuotasInputs = {};
