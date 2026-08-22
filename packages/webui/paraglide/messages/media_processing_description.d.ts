/**
* | output |
* | --- |
* | "Manage your team's media transcoding configurations." |
*
* @param {Media_Processing_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_processing_description: ((inputs?: Media_Processing_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Media_Processing_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Media_Processing_DescriptionInputs = {};
