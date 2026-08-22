/**
* | output |
* | --- |
* | "Delete Comment?" |
*
* @param {Delete_Comment_ConfirmInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_comment_confirm: ((inputs?: Delete_Comment_ConfirmInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Delete_Comment_ConfirmInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Delete_Comment_ConfirmInputs = {};
