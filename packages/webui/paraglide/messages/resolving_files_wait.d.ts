/**
* | output |
* | --- |
* | "Resolving all files and folders. Please wait..." |
*
* @param {Resolving_Files_WaitInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const resolving_files_wait: ((inputs?: Resolving_Files_WaitInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Resolving_Files_WaitInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Resolving_Files_WaitInputs = {};
