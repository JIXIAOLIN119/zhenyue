/**
* | output |
* | --- |
* | "Add Model" |
*
* @param {Add_ModelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_model: ((inputs?: Add_ModelInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Add_ModelInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Add_ModelInputs = {};
