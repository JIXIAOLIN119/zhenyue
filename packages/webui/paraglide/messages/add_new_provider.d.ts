/**
* | output |
* | --- |
* | "Add New Provider" |
*
* @param {Add_New_ProviderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_new_provider: ((inputs?: Add_New_ProviderInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Add_New_ProviderInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Add_New_ProviderInputs = {};
