/**
* | output |
* | --- |
* | "Download original image" |
*
* @param {Download_Original_ImageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const download_original_image: ((inputs?: Download_Original_ImageInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Download_Original_ImageInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Download_Original_ImageInputs = {};
