/**
* | output |
* | --- |
* | "Failed to install skill" |
*
* @param {Failed_To_Install_SkillInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_install_skill: ((inputs?: Failed_To_Install_SkillInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_To_Install_SkillInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_To_Install_SkillInputs = {};
