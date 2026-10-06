/**
* | output |
* | --- |
* | "Provider updated successfully" |
*
* @param {Provider_Updated_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const provider_updated_successfully: ((inputs?: Provider_Updated_SuccessfullyInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Provider_Updated_SuccessfullyInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Provider_Updated_SuccessfullyInputs = {};
