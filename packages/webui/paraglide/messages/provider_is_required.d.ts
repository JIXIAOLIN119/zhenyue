/**
* | output |
* | --- |
* | "Provider is required" |
*
* @param {Provider_Is_RequiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const provider_is_required: ((inputs?: Provider_Is_RequiredInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Provider_Is_RequiredInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Provider_Is_RequiredInputs = {};
