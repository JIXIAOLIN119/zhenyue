/**
* | output |
* | --- |
* | "Failed to rename collection" |
*
* @param {Failed_Rename_CollectionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_rename_collection: ((inputs?: Failed_Rename_CollectionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_Rename_CollectionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_Rename_CollectionInputs = {};
