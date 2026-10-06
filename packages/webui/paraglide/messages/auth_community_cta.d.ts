/**
* | output |
* | --- |
* | "Join our community of developers and designers." |
*
* @param {Auth_Community_CtaInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const auth_community_cta: ((inputs?: Auth_Community_CtaInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Auth_Community_CtaInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Auth_Community_CtaInputs = {};
