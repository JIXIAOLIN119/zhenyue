/**
* | output |
* | --- |
* | "10000+ Folders" |
*
* @param {Count_Overflow_FoldersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const count_overflow_folders: ((inputs?: Count_Overflow_FoldersInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Count_Overflow_FoldersInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Count_Overflow_FoldersInputs = {};
