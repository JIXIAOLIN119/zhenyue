/**
* | output |
* | --- |
* | "Project Preferences" |
*
* @param {Project_PreferencesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const project_preferences: ((inputs?: Project_PreferencesInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Project_PreferencesInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Project_PreferencesInputs = {};
