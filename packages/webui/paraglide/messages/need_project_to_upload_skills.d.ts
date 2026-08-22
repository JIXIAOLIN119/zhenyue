/**
* | output |
* | --- |
* | "You need at least one project in your team to upload skills." |
*
* @param {Need_Project_To_Upload_SkillsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const need_project_to_upload_skills: ((inputs?: Need_Project_To_Upload_SkillsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Need_Project_To_Upload_SkillsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Need_Project_To_Upload_SkillsInputs = {};
