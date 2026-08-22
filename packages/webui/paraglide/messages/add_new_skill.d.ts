/**
* | output |
* | --- |
* | "Add New Skill" |
*
* @param {Add_New_SkillInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_new_skill: ((inputs?: Add_New_SkillInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Add_New_SkillInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Add_New_SkillInputs = {};
