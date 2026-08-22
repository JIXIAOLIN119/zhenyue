/**
* | output |
* | --- |
* | "Untitled Collection" |
*
* @param {Untitled_CollectionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const untitled_collection: ((inputs?: Untitled_CollectionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Untitled_CollectionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Untitled_CollectionInputs = {};
