/**
* | output |
* | --- |
* | "No projects yet." |
*
* @param {No_Projects_YetInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_projects_yet: ((inputs?: No_Projects_YetInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<No_Projects_YetInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type No_Projects_YetInputs = {};
