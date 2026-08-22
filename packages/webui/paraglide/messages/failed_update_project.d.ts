/**
* | output |
* | --- |
* | "Failed to update project" |
*
* @param {Failed_Update_ProjectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_update_project: ((inputs?: Failed_Update_ProjectInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_Update_ProjectInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_Update_ProjectInputs = {};
