/**
* | output |
* | --- |
* | "Attach files" |
*
* @param {Attach_FilesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const attach_files: ((inputs?: Attach_FilesInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Attach_FilesInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Attach_FilesInputs = {};
