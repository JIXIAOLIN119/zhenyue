/**
* | output |
* | --- |
* | "Move to Trash" |
*
* @param {Move_To_TrashInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const move_to_trash: ((inputs?: Move_To_TrashInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Move_To_TrashInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Move_To_TrashInputs = {};
