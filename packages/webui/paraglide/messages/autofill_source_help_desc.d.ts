/**
* | output |
* | --- |
* | "Understand how each autofill source option works and when to use it." |
*
* @param {Autofill_Source_Help_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const autofill_source_help_desc: ((inputs?: Autofill_Source_Help_DescInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Autofill_Source_Help_DescInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Autofill_Source_Help_DescInputs = {};
