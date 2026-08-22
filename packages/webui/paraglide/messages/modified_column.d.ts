/**
* | output |
* | --- |
* | "Modified" |
*
* @param {Modified_ColumnInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const modified_column: ((inputs?: Modified_ColumnInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Modified_ColumnInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Modified_ColumnInputs = {};
