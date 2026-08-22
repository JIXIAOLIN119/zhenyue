/**
* | output |
* | --- |
* | "Visitors can download files from this share link" |
*
* @param {Allow_Download_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const allow_download_description: ((inputs?: Allow_Download_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Allow_Download_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Allow_Download_DescriptionInputs = {};
