/**
* | output |
* | --- |
* | "Failed to delete share link" |
*
* @param {Failed_Delete_Share_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_delete_share_link: ((inputs?: Failed_Delete_Share_LinkInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_Delete_Share_LinkInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_Delete_Share_LinkInputs = {};
