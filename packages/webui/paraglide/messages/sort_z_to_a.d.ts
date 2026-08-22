/**
* | output |
* | --- |
* | "Z → A" |
*
* @param {Sort_Z_To_AInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sort_z_to_a: ((inputs?: Sort_Z_To_AInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Sort_Z_To_AInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Sort_Z_To_AInputs = {};
