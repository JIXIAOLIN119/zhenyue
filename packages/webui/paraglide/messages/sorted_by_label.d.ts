/**
* | output |
* | --- |
* | "Sorted by" |
*
* @param {Sorted_By_LabelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sorted_by_label: ((inputs?: Sorted_By_LabelInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Sorted_By_LabelInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Sorted_By_LabelInputs = {};
