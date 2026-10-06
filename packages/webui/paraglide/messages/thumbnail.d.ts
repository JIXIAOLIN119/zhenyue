/**
* | output |
* | --- |
* | "Thumbnail" |
*
* @param {ThumbnailInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const thumbnail: ((inputs?: ThumbnailInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<ThumbnailInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type ThumbnailInputs = {};
