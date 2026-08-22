/**
* | output |
* | --- |
* | "Image Asset ID" |
*
* @param {Image_Asset_IdInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const image_asset_id: ((inputs?: Image_Asset_IdInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Image_Asset_IdInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Image_Asset_IdInputs = {};
