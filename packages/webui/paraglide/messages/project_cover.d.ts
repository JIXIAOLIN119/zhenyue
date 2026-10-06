/**
* | output |
* | --- |
* | "Project Cover" |
*
* @param {Project_CoverInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const project_cover: ((inputs?: Project_CoverInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Project_CoverInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Project_CoverInputs = {};
