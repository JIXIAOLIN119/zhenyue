/**
* | output |
* | --- |
* | "Moving {count} item(s)" |
*
* @param {Moving_ItemsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const moving_items: ((inputs: Moving_ItemsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Moving_ItemsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Moving_ItemsInputs = {
    count: NonNullable<unknown>;
};
