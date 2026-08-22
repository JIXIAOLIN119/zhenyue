/**
* | output |
* | --- |
* | "Folder hierarchy will be flattened. All nested files will be downloaded directly into your default download folder." |
*
* @param {Folder_Structure_WarningInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const folder_structure_warning: ((inputs?: Folder_Structure_WarningInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Folder_Structure_WarningInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Folder_Structure_WarningInputs = {};
