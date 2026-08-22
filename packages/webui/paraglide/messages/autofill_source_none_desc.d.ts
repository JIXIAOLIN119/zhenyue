/**
* | output |
* | --- |
* | "Metadata fields marked as 'None' will not be automatically populated by AI. They are meant for manual user entry." |
*
* @param {Autofill_Source_None_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const autofill_source_none_desc: ((inputs?: Autofill_Source_None_DescInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Autofill_Source_None_DescInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Autofill_Source_None_DescInputs = {};
