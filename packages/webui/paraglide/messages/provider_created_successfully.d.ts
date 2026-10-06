/**
* | output |
* | --- |
* | "Provider created successfully" |
*
* @param {Provider_Created_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const provider_created_successfully: ((inputs?: Provider_Created_SuccessfullyInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Provider_Created_SuccessfullyInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Provider_Created_SuccessfullyInputs = {};
