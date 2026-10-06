/**
* | output |
* | --- |
* | "No skills installed" |
*
* @param {No_Skills_InstalledInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_skills_installed: ((inputs?: No_Skills_InstalledInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<No_Skills_InstalledInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type No_Skills_InstalledInputs = {};
