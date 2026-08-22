/**
* | output |
* | --- |
* | "Failed to fetch folders" |
*
* @param {Failed_Fetch_FoldersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_fetch_folders: ((inputs?: Failed_Fetch_FoldersInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_Fetch_FoldersInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_Fetch_FoldersInputs = {};
