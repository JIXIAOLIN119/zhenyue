/**
* | output |
* | --- |
* | "Failed to create share link" |
*
* @param {Failed_Create_Share_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_create_share_link: ((inputs?: Failed_Create_Share_LinkInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_Create_Share_LinkInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_Create_Share_LinkInputs = {};
