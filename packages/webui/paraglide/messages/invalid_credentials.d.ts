/**
* | output |
* | --- |
* | "Invalid credentials" |
*
* @param {Invalid_CredentialsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const invalid_credentials: ((inputs?: Invalid_CredentialsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Invalid_CredentialsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Invalid_CredentialsInputs = {};
