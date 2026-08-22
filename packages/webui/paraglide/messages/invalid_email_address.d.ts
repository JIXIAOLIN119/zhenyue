/**
* | output |
* | --- |
* | "Invalid email address" |
*
* @param {Invalid_Email_AddressInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const invalid_email_address: ((inputs?: Invalid_Email_AddressInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Invalid_Email_AddressInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Invalid_Email_AddressInputs = {};
