/**
* | output |
* | --- |
* | "Select a project first" |
*
* @param {Select_Project_FirstInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_project_first: ((inputs?: Select_Project_FirstInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Select_Project_FirstInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Select_Project_FirstInputs = {};
