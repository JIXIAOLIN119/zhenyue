/**
* | output |
* | --- |
* | "Remove Cover" |
*
* @param {Remove_CoverInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const remove_cover: ((inputs?: Remove_CoverInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Remove_CoverInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Remove_CoverInputs = {};
