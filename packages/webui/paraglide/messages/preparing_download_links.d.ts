/**
* | output |
* | --- |
* | "Preparing download links..." |
*
* @param {Preparing_Download_LinksInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const preparing_download_links: ((inputs?: Preparing_Download_LinksInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Preparing_Download_LinksInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Preparing_Download_LinksInputs = {};
