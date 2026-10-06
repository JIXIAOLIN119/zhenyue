/**
* | output |
* | --- |
* | "A clear, concise name to identify your project space." |
*
* @param {Project_Name_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const project_name_hint: ((inputs?: Project_Name_HintInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Project_Name_HintInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Project_Name_HintInputs = {};
