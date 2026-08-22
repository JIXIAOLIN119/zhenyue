/**
* | output |
* | --- |
* | "Language updated successfully" |
*
* @param {Language_UpdatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const language_updated: ((inputs?: Language_UpdatedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Language_UpdatedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Language_UpdatedInputs = {};
