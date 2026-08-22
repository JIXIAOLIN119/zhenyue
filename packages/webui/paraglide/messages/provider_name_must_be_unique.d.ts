/**
* | output |
* | --- |
* | "Provider name must be unique" |
*
* @param {Provider_Name_Must_Be_UniqueInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const provider_name_must_be_unique: ((inputs?: Provider_Name_Must_Be_UniqueInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Provider_Name_Must_Be_UniqueInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Provider_Name_Must_Be_UniqueInputs = {};
