/**
* | output |
* | --- |
* | "Delete Asset?" |
*
* @param {Delete_Asset_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_asset_title: ((inputs?: Delete_Asset_TitleInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Delete_Asset_TitleInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Delete_Asset_TitleInputs = {};
