/**
* | output |
* | --- |
* | "No uploads yet" |
*
* @param {No_Uploads_YetInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_uploads_yet: ((inputs?: No_Uploads_YetInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<No_Uploads_YetInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type No_Uploads_YetInputs = {};
