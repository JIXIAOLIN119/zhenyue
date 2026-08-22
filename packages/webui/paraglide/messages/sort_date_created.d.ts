/**
* | output |
* | --- |
* | "Date Created" |
*
* @param {Sort_Date_CreatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sort_date_created: ((inputs?: Sort_Date_CreatedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Sort_Date_CreatedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Sort_Date_CreatedInputs = {};
