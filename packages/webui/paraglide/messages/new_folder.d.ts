/**
* | output |
* | --- |
* | "New Folder" |
*
* @param {New_FolderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const new_folder: ((inputs?: New_FolderInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<New_FolderInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type New_FolderInputs = {};
