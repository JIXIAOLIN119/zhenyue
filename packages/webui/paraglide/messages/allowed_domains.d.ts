/**
* | output |
* | --- |
* | "Allowed Domains" |
*
* @param {Allowed_DomainsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const allowed_domains: ((inputs?: Allowed_DomainsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Allowed_DomainsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Allowed_DomainsInputs = {};
