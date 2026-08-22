/**
* | output |
* | --- |
* | "Failed to delete folder" |
*
* @param {Failed_Delete_FolderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_delete_folder: ((inputs?: Failed_Delete_FolderInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_Delete_FolderInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_Delete_FolderInputs = {};
