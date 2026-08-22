/**
* | output |
* | --- |
* | "Configure Skill: {name}" |
*
* @param {Configure_SkillInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const configure_skill: ((inputs: Configure_SkillInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Configure_SkillInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Configure_SkillInputs = {
    name: NonNullable<unknown>;
};
