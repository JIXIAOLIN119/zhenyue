/**
* | output |
* | --- |
* | "Failed to delete collection" |
*
* @param {Failed_Delete_CollectionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_delete_collection: ((inputs?: Failed_Delete_CollectionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_Delete_CollectionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_Delete_CollectionInputs = {};
