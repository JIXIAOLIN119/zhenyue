/**
* | output |
* | --- |
* | "Allow download" |
*
* @param {Allow_DownloadInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const allow_download: ((inputs?: Allow_DownloadInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Allow_DownloadInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Allow_DownloadInputs = {};
