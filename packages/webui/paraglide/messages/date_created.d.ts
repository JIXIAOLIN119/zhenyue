/**
* | output |
* | --- |
* | "Date Created" |
*
* @param {Date_CreatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const date_created: ((inputs?: Date_CreatedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Date_CreatedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Date_CreatedInputs = {};
