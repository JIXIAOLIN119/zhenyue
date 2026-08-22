/**
* | output |
* | --- |
* | "Image Asset" |
*
* @param {Image_Asset_KeyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const image_asset_key: ((inputs?: Image_Asset_KeyInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Image_Asset_KeyInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Image_Asset_KeyInputs = {};
