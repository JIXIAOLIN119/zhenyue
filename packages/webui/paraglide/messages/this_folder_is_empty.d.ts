/**
* | output |
* | --- |
* | "This folder is empty" |
*
* @param {This_Folder_Is_EmptyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const this_folder_is_empty: ((inputs?: This_Folder_Is_EmptyInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<This_Folder_Is_EmptyInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type This_Folder_Is_EmptyInputs = {};
