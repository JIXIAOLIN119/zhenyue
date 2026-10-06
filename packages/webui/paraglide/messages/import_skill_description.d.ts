/**
* | output |
* | --- |
* | "Import a skill from a local ZIP archive or a GitHub repository." |
*
* @param {Import_Skill_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const import_skill_description: ((inputs?: Import_Skill_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Import_Skill_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Import_Skill_DescriptionInputs = {};
