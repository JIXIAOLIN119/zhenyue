/**
* | output |
* | --- |
* | "Empty Trash?" |
*
* @param {Empty_Trash_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const empty_trash_title: ((inputs?: Empty_Trash_TitleInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Empty_Trash_TitleInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Empty_Trash_TitleInputs = {};
