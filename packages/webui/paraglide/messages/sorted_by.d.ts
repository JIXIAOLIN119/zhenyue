/**
* | output |
* | --- |
* | "Sorted by {field}" |
*
* @param {Sorted_ByInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sorted_by: ((inputs: Sorted_ByInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Sorted_ByInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Sorted_ByInputs = {
    field: NonNullable<unknown>;
};
