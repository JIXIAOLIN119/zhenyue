/**
* | output |
* | --- |
* | "Provider deleted successfully" |
*
* @param {Provider_Deleted_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const provider_deleted_successfully: ((inputs?: Provider_Deleted_SuccessfullyInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Provider_Deleted_SuccessfullyInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Provider_Deleted_SuccessfullyInputs = {};
