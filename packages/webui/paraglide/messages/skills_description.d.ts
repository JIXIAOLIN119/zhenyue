/**
* | output |
* | --- |
* | "Add, update and configure AI skills for the team." |
*
* @param {Skills_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const skills_description: ((inputs?: Skills_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Skills_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Skills_DescriptionInputs = {};
