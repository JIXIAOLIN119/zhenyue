/**
* | output |
* | --- |
* | "This download will include {count} file(s)." |
*
* @param {Download_Includes_FilesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const download_includes_files: ((inputs: Download_Includes_FilesInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Download_Includes_FilesInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Download_Includes_FilesInputs = {
    count: NonNullable<unknown>;
};
