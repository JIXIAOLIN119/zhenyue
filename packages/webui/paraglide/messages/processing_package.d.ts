/**
* | output |
* | --- |
* | "Processing package..." |
*
* @param {Processing_PackageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const processing_package: ((inputs?: Processing_PackageInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Processing_PackageInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Processing_PackageInputs = {};
