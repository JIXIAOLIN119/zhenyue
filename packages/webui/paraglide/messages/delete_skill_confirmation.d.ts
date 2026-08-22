/**
* | output |
* | --- |
* | "This action cannot be undone. This will permanently delete the skill \"{name}\" and all its configurations." |
*
* @param {Delete_Skill_ConfirmationInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_skill_confirmation: ((inputs: Delete_Skill_ConfirmationInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Delete_Skill_ConfirmationInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Delete_Skill_ConfirmationInputs = {
    name: NonNullable<unknown>;
};
