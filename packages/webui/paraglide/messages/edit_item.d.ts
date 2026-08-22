/**
* | output |
* | --- |
* | "Edit {name}" |
*
* @param {Edit_ItemInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const edit_item: ((inputs: Edit_ItemInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Edit_ItemInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Edit_ItemInputs = {
    name: NonNullable<unknown>;
};
