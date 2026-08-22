/**
* | output |
* | --- |
* | "Loading more..." |
*
* @param {Loading_MoreInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const loading_more: ((inputs?: Loading_MoreInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Loading_MoreInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Loading_MoreInputs = {};
