/**
* | output |
* | --- |
* | "File size exceeds the 1MB limit" |
*
* @param {File_Exceeds_1mb_LimitInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const file_exceeds_1mb_limit: ((inputs?: File_Exceeds_1mb_LimitInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<File_Exceeds_1mb_LimitInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type File_Exceeds_1mb_LimitInputs = {};
