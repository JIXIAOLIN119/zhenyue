/**
* | output |
* | --- |
* | "{count} Items" |
*
* @param {N_ItemsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const n_items: ((inputs: N_ItemsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<N_ItemsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type N_ItemsInputs = {
    count: NonNullable<unknown>;
};
