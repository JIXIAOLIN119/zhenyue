/**
* | output |
* | --- |
* | "Failed to rename share link" |
*
* @param {Failed_Rename_Share_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_rename_share_link: ((inputs?: Failed_Rename_Share_LinkInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_Rename_Share_LinkInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_Rename_Share_LinkInputs = {};
