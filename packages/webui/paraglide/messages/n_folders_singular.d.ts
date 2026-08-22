/**
* | output |
* | --- |
* | "{count} Folder" |
*
* @param {N_Folders_SingularInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const n_folders_singular: ((inputs: N_Folders_SingularInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<N_Folders_SingularInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type N_Folders_SingularInputs = {
    count: NonNullable<unknown>;
};
