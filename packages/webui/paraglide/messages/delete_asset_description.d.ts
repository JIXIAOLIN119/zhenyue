/**
* | output |
* | --- |
* | "Deleted items can be recovered for 30 days before being permanently deleted." |
*
* @param {Delete_Asset_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_asset_description: ((inputs?: Delete_Asset_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Delete_Asset_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Delete_Asset_DescriptionInputs = {};
