/**
* | output |
* | --- |
* | "Select Provider" |
*
* @param {Select_ProviderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_provider: ((inputs?: Select_ProviderInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Select_ProviderInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Select_ProviderInputs = {};
