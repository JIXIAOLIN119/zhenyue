/**
* | output |
* | --- |
* | "No resource quotas configured" |
*
* @param {No_Quotas_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_quotas_title: ((inputs?: No_Quotas_TitleInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<No_Quotas_TitleInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type No_Quotas_TitleInputs = {};
