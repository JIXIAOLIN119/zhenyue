/**
* | output |
* | --- |
* | "Fields marked as 'Content' are automatically analyzed and extracted from the asset's visual or textual content after upload. Note: A team owner must first cr..." |
*
* @param {Autofill_Source_Content_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const autofill_source_content_desc: ((inputs?: Autofill_Source_Content_DescInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Autofill_Source_Content_DescInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Autofill_Source_Content_DescInputs = {};
