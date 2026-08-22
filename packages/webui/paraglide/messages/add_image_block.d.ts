/**
* | output |
* | --- |
* | "Add Image Block" |
*
* @param {Add_Image_BlockInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_image_block: ((inputs?: Add_Image_BlockInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Add_Image_BlockInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Add_Image_BlockInputs = {};
