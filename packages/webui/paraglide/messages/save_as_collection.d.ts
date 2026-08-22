/**
* | output |
* | --- |
* | "Save as collection" |
*
* @param {Save_As_CollectionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const save_as_collection: ((inputs?: Save_As_CollectionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Save_As_CollectionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Save_As_CollectionInputs = {};
