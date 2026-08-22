/**
* | output |
* | --- |
* | "{count} file(s) selected" |
*
* @param {N_Files_SelectedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const n_files_selected: ((inputs: N_Files_SelectedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<N_Files_SelectedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type N_Files_SelectedInputs = {
    count: NonNullable<unknown>;
};
