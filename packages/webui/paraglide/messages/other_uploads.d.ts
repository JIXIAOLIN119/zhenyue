/**
* | output |
* | --- |
* | "Other Uploads" |
*
* @param {Other_UploadsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const other_uploads: ((inputs?: Other_UploadsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Other_UploadsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Other_UploadsInputs = {};
