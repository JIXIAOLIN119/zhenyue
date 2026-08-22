/**
* | output |
* | --- |
* | "Failed to generate invite link" |
*
* @param {Failed_To_Generate_Invite_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_generate_invite_link: ((inputs?: Failed_To_Generate_Invite_LinkInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_To_Generate_Invite_LinkInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_To_Generate_Invite_LinkInputs = {};
