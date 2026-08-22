/**
* | output |
* | --- |
* | "{count} Folders" |
*
* @param {N_Folders_PluralInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const n_folders_plural: ((inputs: N_Folders_PluralInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<N_Folders_PluralInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type N_Folders_PluralInputs = {
    count: NonNullable<unknown>;
};
