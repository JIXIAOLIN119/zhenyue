/**
* | output |
* | --- |
* | "Mark all as read" |
*
* @param {Mark_All_As_ReadInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const mark_all_as_read: ((inputs?: Mark_All_As_ReadInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Mark_All_As_ReadInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Mark_All_As_ReadInputs = {};
