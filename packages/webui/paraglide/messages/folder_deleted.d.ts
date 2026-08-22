/**
* | output |
* | --- |
* | "Folder deleted" |
*
* @param {Folder_DeletedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const folder_deleted: ((inputs?: Folder_DeletedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Folder_DeletedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Folder_DeletedInputs = {};
