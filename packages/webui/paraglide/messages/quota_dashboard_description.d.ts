/**
* | output |
* | --- |
* | "Monitor live quota usage and reset individual usage windows." |
*
* @param {Quota_Dashboard_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_dashboard_description: ((inputs?: Quota_Dashboard_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Quota_Dashboard_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Quota_Dashboard_DescriptionInputs = {};
