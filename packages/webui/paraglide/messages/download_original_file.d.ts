/**
* | output |
* | --- |
* | "Download original file" |
*
* @param {Download_Original_FileInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const download_original_file: ((inputs?: Download_Original_FileInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Download_Original_FileInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Download_Original_FileInputs = {};
