/**
* | output |
* | --- |
* | "Delete Folder?" |
*
* @param {Delete_Folder_ConfirmInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_folder_confirm: ((inputs?: Delete_Folder_ConfirmInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Delete_Folder_ConfirmInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Delete_Folder_ConfirmInputs = {};
