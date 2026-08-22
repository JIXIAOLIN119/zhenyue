/**
* | output |
* | --- |
* | "Assets" |
*
* @param {Folder_Tree_AssetsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const folder_tree_assets: ((inputs?: Folder_Tree_AssetsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Folder_Tree_AssetsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Folder_Tree_AssetsInputs = {};
