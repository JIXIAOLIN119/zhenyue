/**
* | output |
* | --- |
* | "All resolutions" |
*
* @param {All_ResolutionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const all_resolutions: ((inputs?: All_ResolutionsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<All_ResolutionsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type All_ResolutionsInputs = {};
