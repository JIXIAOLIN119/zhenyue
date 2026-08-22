/**
* | output |
* | --- |
* | "Email address is managed by authentication provider." |
*
* @param {Email_Managed_By_AuthInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_managed_by_auth: ((inputs?: Email_Managed_By_AuthInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Email_Managed_By_AuthInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Email_Managed_By_AuthInputs = {};
