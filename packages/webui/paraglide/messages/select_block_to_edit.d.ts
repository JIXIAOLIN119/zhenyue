/**
* | output |
* | --- |
* | "Select a block to edit its properties" |
*
* @param {Select_Block_To_EditInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_block_to_edit: ((inputs?: Select_Block_To_EditInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Select_Block_To_EditInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Select_Block_To_EditInputs = {};
