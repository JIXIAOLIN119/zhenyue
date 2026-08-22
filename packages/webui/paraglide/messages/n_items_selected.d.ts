/**
* | output |
* | --- |
* | "{count} Item(s) selected" |
*
* @param {N_Items_SelectedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const n_items_selected: ((inputs: N_Items_SelectedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<N_Items_SelectedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type N_Items_SelectedInputs = {
    count: NonNullable<unknown>;
};
