/**
* | output |
* | --- |
* | "No custom domains allowed" |
*
* @param {No_Custom_Domains_AllowedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_custom_domains_allowed: ((inputs?: No_Custom_Domains_AllowedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<No_Custom_Domains_AllowedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type No_Custom_Domains_AllowedInputs = {};
