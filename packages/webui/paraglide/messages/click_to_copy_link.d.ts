/**
* | output |
* | --- |
* | "Click to copy link" |
*
* @param {Click_To_Copy_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const click_to_copy_link: ((inputs?: Click_To_Copy_LinkInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Click_To_Copy_LinkInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Click_To_Copy_LinkInputs = {};
