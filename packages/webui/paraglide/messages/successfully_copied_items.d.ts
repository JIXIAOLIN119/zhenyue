/**
* | output |
* | --- |
* | "Successfully copied {count} item(s)" |
*
* @param {Successfully_Copied_ItemsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const successfully_copied_items: ((inputs: Successfully_Copied_ItemsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Successfully_Copied_ItemsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Successfully_Copied_ItemsInputs = {
    count: NonNullable<unknown>;
};
