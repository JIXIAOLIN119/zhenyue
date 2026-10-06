/**
* | output |
* | --- |
* | "Do you want to override the existing skill?" |
*
* @param {Override_Existing_SkillInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const override_existing_skill: ((inputs?: Override_Existing_SkillInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Override_Existing_SkillInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Override_Existing_SkillInputs = {};
