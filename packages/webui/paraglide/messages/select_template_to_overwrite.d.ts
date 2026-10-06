/**
* | output |
* | --- |
* | "Select template to overwrite" |
*
* @param {Select_Template_To_OverwriteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_template_to_overwrite: ((inputs?: Select_Template_To_OverwriteInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Select_Template_To_OverwriteInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Select_Template_To_OverwriteInputs = {};
