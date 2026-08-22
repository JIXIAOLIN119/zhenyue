/**
* | output |
* | --- |
* | "Generates all supported resolutions up to the source quality." |
*
* @param {All_Resolutions_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const all_resolutions_description: ((inputs?: All_Resolutions_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<All_Resolutions_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type All_Resolutions_DescriptionInputs = {};
