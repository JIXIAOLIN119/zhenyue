/**
* | output |
* | --- |
* | "Previous Page" |
*
* @param {Previous_PageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const previous_page: ((inputs?: Previous_PageInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Previous_PageInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Previous_PageInputs = {};
