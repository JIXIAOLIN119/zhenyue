/**
* | output |
* | --- |
* | "Size:" |
*
* @param {Size_PrefixInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const size_prefix: ((inputs?: Size_PrefixInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Size_PrefixInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Size_PrefixInputs = {};
