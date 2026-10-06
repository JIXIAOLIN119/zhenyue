/**
* | output |
* | --- |
* | "Copy optimized image to clipboard" |
*
* @param {Copy_Image_To_ClipboardInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const copy_image_to_clipboard: ((inputs?: Copy_Image_To_ClipboardInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Copy_Image_To_ClipboardInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Copy_Image_To_ClipboardInputs = {};
