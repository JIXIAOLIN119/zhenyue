/**
* | output |
* | --- |
* | "Colleagues can open this link to view this file and your comments." |
*
* @param {Share_File_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const share_file_description: ((inputs?: Share_File_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Share_File_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Share_File_DescriptionInputs = {};
