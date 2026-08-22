/**
* | output |
* | --- |
* | "Extend your chatbot's capabilities with custom skills." |
*
* @param {Skills_Management_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const skills_management_description: ((inputs?: Skills_Management_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Skills_Management_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Skills_Management_DescriptionInputs = {};
