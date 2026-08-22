/**
* | output |
* | --- |
* | "Dark Grid" |
*
* @param {Dark_GridInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dark_grid: ((inputs?: Dark_GridInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Dark_GridInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Dark_GridInputs = {};
