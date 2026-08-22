/**
* | output |
* | --- |
* | "Creating share link…" |
*
* @param {Share_File_CreatingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const share_file_creating: ((inputs?: Share_File_CreatingInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Share_File_CreatingInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Share_File_CreatingInputs = {};
