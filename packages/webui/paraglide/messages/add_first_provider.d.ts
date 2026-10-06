/**
* | output |
* | --- |
* | "Add your first AI provider to get started." |
*
* @param {Add_First_ProviderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_first_provider: ((inputs?: Add_First_ProviderInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Add_First_ProviderInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Add_First_ProviderInputs = {};
