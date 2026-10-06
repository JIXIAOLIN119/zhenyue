/**
* | output |
* | --- |
* | "No Folder Structure" |
*
* @param {No_Folder_StructureInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_folder_structure: ((inputs?: No_Folder_StructureInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<No_Folder_StructureInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type No_Folder_StructureInputs = {};
