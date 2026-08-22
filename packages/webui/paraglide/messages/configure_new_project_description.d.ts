/**
* | output |
* | --- |
* | "Configure your new project workspace and appearance." |
*
* @param {Configure_New_Project_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const configure_new_project_description: ((inputs?: Configure_New_Project_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Configure_New_Project_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Configure_New_Project_DescriptionInputs = {};
