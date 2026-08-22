/**
* | output |
* | --- |
* | "Project ID" |
*
* @param {Project_IdInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const project_id: ((inputs?: Project_IdInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Project_IdInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Project_IdInputs = {};
