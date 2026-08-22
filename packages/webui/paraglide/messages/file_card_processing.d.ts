/**
* | output |
* | --- |
* | "Processing" |
*
* @param {File_Card_ProcessingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const file_card_processing: ((inputs?: File_Card_ProcessingInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<File_Card_ProcessingInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type File_Card_ProcessingInputs = {};
