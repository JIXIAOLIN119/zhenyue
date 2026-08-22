/**
* | output |
* | --- |
* | "Display Name (Optional)" |
*
* @param {Display_Name_OptionalInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const display_name_optional: ((inputs?: Display_Name_OptionalInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Display_Name_OptionalInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Display_Name_OptionalInputs = {};
