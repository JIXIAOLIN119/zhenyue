/**
* | output |
* | --- |
* | "Preparing Download" |
*
* @param {Preparing_DownloadInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const preparing_download: ((inputs?: Preparing_DownloadInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Preparing_DownloadInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Preparing_DownloadInputs = {};
