/**
* | output |
* | --- |
* | "Add Text Block" |
*
* @param {Add_Text_BlockInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_text_block: ((inputs?: Add_Text_BlockInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Add_Text_BlockInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Add_Text_BlockInputs = {};
