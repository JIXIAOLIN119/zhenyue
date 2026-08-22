/**
* | output |
* | --- |
* | "Autofill Source Guide" |
*
* @param {Autofill_Source_Help_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const autofill_source_help_title: ((inputs?: Autofill_Source_Help_TitleInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Autofill_Source_Help_TitleInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Autofill_Source_Help_TitleInputs = {};
