/**
* | output |
* | --- |
* | "No pending domains requiring approval" |
*
* @param {No_Pending_DomainsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_pending_domains: ((inputs?: No_Pending_DomainsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<No_Pending_DomainsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type No_Pending_DomainsInputs = {};
