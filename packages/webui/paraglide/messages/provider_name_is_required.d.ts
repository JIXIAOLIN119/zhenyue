/**
* | output |
* | --- |
* | "Provider name is required" |
*
* @param {Provider_Name_Is_RequiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const provider_name_is_required: ((inputs?: Provider_Name_Is_RequiredInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Provider_Name_Is_RequiredInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Provider_Name_Is_RequiredInputs = {};
