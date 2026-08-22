/**
* | output |
* | --- |
* | "e.g. Acme Marketing, Q3 Product Launch..." |
*
* @param {Project_Name_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const project_name_placeholder: ((inputs?: Project_Name_PlaceholderInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Project_Name_PlaceholderInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Project_Name_PlaceholderInputs = {};
