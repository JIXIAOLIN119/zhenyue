/**
* | output |
* | --- |
* | "Collection deleted" |
*
* @param {Collection_DeletedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const collection_deleted: ((inputs?: Collection_DeletedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Collection_DeletedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Collection_DeletedInputs = {};
