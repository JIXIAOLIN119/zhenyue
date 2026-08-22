/**
* | output |
* | --- |
* | "Selected folder files will be prepared for download." |
*
* @param {Folder_Files_Download_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const folder_files_download_description: ((inputs?: Folder_Files_Download_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Folder_Files_Download_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Folder_Files_Download_DescriptionInputs = {};
