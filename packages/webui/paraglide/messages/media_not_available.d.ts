/**
* | output |
* | --- |
* | "Media is not available." |
*
* @param {Media_Not_AvailableInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_not_available: ((inputs?: Media_Not_AvailableInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Media_Not_AvailableInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Media_Not_AvailableInputs = {};
