/**
* | output |
* | --- |
* | "Search" |
*
* @param {Search_Dialog_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_dialog_title: ((inputs?: Search_Dialog_TitleInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Search_Dialog_TitleInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Search_Dialog_TitleInputs = {};
