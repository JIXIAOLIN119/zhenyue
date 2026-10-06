/**
* | output |
* | --- |
* | "Moved to trash" |
*
* @param {Moved_To_TrashInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const moved_to_trash: ((inputs?: Moved_To_TrashInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Moved_To_TrashInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Moved_To_TrashInputs = {};
