/**
* | output |
* | --- |
* | "Go to folder" |
*
* @param {Go_To_FolderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const go_to_folder: ((inputs?: Go_To_FolderInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Go_To_FolderInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Go_To_FolderInputs = {};
