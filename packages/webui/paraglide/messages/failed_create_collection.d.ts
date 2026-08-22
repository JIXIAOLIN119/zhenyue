/**
* | output |
* | --- |
* | "Failed to create collection" |
*
* @param {Failed_Create_CollectionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_create_collection: ((inputs?: Failed_Create_CollectionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_Create_CollectionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_Create_CollectionInputs = {};
