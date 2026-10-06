/**
* | output |
* | --- |
* | "Name" |
*
* @param {Name_ColumnInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const name_column: ((inputs?: Name_ColumnInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Name_ColumnInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Name_ColumnInputs = {};
