/**
* | output |
* | --- |
* | "All items in the recently deleted folder will be permanently removed both from the database and from storage. This action cannot be undone." |
*
* @param {Empty_Trash_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const empty_trash_description: ((inputs?: Empty_Trash_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Empty_Trash_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Empty_Trash_DescriptionInputs = {};
