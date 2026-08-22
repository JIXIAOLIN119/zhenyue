/**
* | output |
* | --- |
* | "No fields found" |
*
* @param {No_Fields_FoundInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_fields_found: ((inputs?: No_Fields_FoundInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<No_Fields_FoundInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type No_Fields_FoundInputs = {};
