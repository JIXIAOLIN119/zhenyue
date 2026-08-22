/**
* | output |
* | --- |
* | "No item selected" |
*
* @param {No_Item_SelectedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_item_selected: ((inputs?: No_Item_SelectedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<No_Item_SelectedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type No_Item_SelectedInputs = {};
