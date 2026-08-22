/**
* | output |
* | --- |
* | "None" |
*
* @param {Autofill_Source_NoneInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const autofill_source_none: ((inputs?: Autofill_Source_NoneInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Autofill_Source_NoneInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Autofill_Source_NoneInputs = {};
