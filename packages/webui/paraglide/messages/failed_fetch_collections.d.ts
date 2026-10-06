/**
* | output |
* | --- |
* | "Failed to fetch collections" |
*
* @param {Failed_Fetch_CollectionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_fetch_collections: ((inputs?: Failed_Fetch_CollectionsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_Fetch_CollectionsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_Fetch_CollectionsInputs = {};
