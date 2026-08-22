/**
* | output |
* | --- |
* | "Search Item ID..." |
*
* @param {Search_Item_IdInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_item_id: ((inputs?: Search_Item_IdInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Search_Item_IdInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Search_Item_IdInputs = {};
