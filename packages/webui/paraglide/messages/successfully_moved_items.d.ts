/**
* | output |
* | --- |
* | "Successfully moved {count} item(s)" |
*
* @param {Successfully_Moved_ItemsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const successfully_moved_items: ((inputs: Successfully_Moved_ItemsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Successfully_Moved_ItemsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Successfully_Moved_ItemsInputs = {
    count: NonNullable<unknown>;
};
