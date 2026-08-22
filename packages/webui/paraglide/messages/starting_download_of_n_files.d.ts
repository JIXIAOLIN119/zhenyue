/**
* | output |
* | --- |
* | "Starting download of {count} files. Please allow multiple downloads if prompted by your browser." |
*
* @param {Starting_Download_Of_N_FilesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const starting_download_of_n_files: ((inputs: Starting_Download_Of_N_FilesInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Starting_Download_Of_N_FilesInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Starting_Download_Of_N_FilesInputs = {
    count: NonNullable<unknown>;
};
