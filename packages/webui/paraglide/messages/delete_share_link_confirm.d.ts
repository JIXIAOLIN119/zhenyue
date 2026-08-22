/**
* | output |
* | --- |
* | "Delete Share Link?" |
*
* @param {Delete_Share_Link_ConfirmInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_share_link_confirm: ((inputs?: Delete_Share_Link_ConfirmInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Delete_Share_Link_ConfirmInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Delete_Share_Link_ConfirmInputs = {};
