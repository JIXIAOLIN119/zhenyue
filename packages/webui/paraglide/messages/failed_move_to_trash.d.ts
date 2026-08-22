/**
* | output |
* | --- |
* | "Failed to move to trash" |
*
* @param {Failed_Move_To_TrashInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_move_to_trash: ((inputs?: Failed_Move_To_TrashInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_Move_To_TrashInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_Move_To_TrashInputs = {};
