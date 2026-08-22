/**
* | output |
* | --- |
* | "Matched {count} items" |
*
* @param {Matched_ItemsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const matched_items: ((inputs: Matched_ItemsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Matched_ItemsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Matched_ItemsInputs = {
    count: NonNullable<unknown>;
};
