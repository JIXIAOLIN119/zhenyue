/**
* | output |
* | --- |
* | "unknown asset" |
*
* @param {Unknown_AssetInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const unknown_asset: ((inputs?: Unknown_AssetInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Unknown_AssetInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Unknown_AssetInputs = {};
