/**
* | output |
* | --- |
* | "File uploaded" |
*
* @param {File_UploadedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const file_uploaded: ((inputs?: File_UploadedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<File_UploadedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type File_UploadedInputs = {};
