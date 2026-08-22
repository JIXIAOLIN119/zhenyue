/**
* | output |
* | --- |
* | "Untitled Upload" |
*
* @param {Untitled_UploadInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const untitled_upload: ((inputs?: Untitled_UploadInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Untitled_UploadInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Untitled_UploadInputs = {};
