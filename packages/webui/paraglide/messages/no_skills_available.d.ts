/**
* | output |
* | --- |
* | "No skills available." |
*
* @param {No_Skills_AvailableInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_skills_available: ((inputs?: No_Skills_AvailableInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<No_Skills_AvailableInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type No_Skills_AvailableInputs = {};
