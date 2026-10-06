/**
* | output |
* | --- |
* | "{count} folder(s) selected" |
*
* @param {N_Folders_SelectedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const n_folders_selected: ((inputs: N_Folders_SelectedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<N_Folders_SelectedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type N_Folders_SelectedInputs = {
    count: NonNullable<unknown>;
};
