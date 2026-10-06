/**
* | output |
* | --- |
* | "Failed to update language" |
*
* @param {Failed_Update_LanguageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_update_language: ((inputs?: Failed_Update_LanguageInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_Update_LanguageInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_Update_LanguageInputs = {};
