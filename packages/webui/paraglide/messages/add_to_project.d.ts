/**
* | output |
* | --- |
* | "Add to Project" |
*
* @param {Add_To_ProjectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_to_project: ((inputs?: Add_To_ProjectInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Add_To_ProjectInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Add_To_ProjectInputs = {};
