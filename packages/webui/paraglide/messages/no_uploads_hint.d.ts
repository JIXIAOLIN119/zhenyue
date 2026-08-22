/**
* | output |
* | --- |
* | "Upload files in the project view to track progress here." |
*
* @param {No_Uploads_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_uploads_hint: ((inputs?: No_Uploads_HintInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<No_Uploads_HintInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type No_Uploads_HintInputs = {};
