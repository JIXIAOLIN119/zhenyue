/**
* | output |
* | --- |
* | "Date Modified" |
*
* @param {Sort_Date_ModifiedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sort_date_modified: ((inputs?: Sort_Date_ModifiedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Sort_Date_ModifiedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Sort_Date_ModifiedInputs = {};
