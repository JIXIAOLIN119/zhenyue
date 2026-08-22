/**
* | output |
* | --- |
* | "[Image Object]" |
*
* @param {Image_ObjectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const image_object: ((inputs?: Image_ObjectInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Image_ObjectInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Image_ObjectInputs = {};
