/**
* | output |
* | --- |
* | "Folder renamed" |
*
* @param {Folder_RenamedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const folder_renamed: ((inputs?: Folder_RenamedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Folder_RenamedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Folder_RenamedInputs = {};
