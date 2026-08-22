/**
* | output |
* | --- |
* | "Failed to fetch folder children" |
*
* @param {Failed_To_Fetch_Folder_ChildrenInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_fetch_folder_children: ((inputs?: Failed_To_Fetch_Folder_ChildrenInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_To_Fetch_Folder_ChildrenInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_To_Fetch_Folder_ChildrenInputs = {};
