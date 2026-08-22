/**
* | output |
* | --- |
* | "Confirm Download" |
*
* @param {Confirm_Download_DialogInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const confirm_download_dialog: ((inputs?: Confirm_Download_DialogInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Confirm_Download_DialogInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Confirm_Download_DialogInputs = {};
