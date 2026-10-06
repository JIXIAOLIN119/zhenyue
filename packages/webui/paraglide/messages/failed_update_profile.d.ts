/**
* | output |
* | --- |
* | "Failed to update profile" |
*
* @param {Failed_Update_ProfileInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_update_profile: ((inputs?: Failed_Update_ProfileInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_Update_ProfileInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_Update_ProfileInputs = {};
