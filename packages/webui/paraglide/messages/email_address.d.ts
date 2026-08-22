/**
* | output |
* | --- |
* | "Email Address" |
*
* @param {Email_AddressInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_address: ((inputs?: Email_AddressInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Email_AddressInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Email_AddressInputs = {};
