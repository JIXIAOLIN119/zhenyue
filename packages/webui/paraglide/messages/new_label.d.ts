/**
* | output |
* | --- |
* | "New" |
*
* @param {New_LabelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const new_label: ((inputs?: New_LabelInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<New_LabelInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type New_LabelInputs = {};
