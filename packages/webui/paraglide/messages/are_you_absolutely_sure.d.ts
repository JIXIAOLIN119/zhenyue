/**
* | output |
* | --- |
* | "Are you absolutely sure?" |
*
* @param {Are_You_Absolutely_SureInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const are_you_absolutely_sure: ((inputs?: Are_You_Absolutely_SureInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Are_You_Absolutely_SureInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Are_You_Absolutely_SureInputs = {};
