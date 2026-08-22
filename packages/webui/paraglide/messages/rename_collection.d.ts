/**
* | output |
* | --- |
* | "Rename Collection" |
*
* @param {Rename_CollectionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const rename_collection: ((inputs?: Rename_CollectionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Rename_CollectionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Rename_CollectionInputs = {};
