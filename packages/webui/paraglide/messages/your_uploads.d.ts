/**
* | output |
* | --- |
* | "Your Uploads" |
*
* @param {Your_UploadsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const your_uploads: ((inputs?: Your_UploadsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Your_UploadsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Your_UploadsInputs = {};
