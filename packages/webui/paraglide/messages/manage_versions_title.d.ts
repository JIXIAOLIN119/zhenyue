/**
* | output |
* | --- |
* | "Manage versions" |
*
* @param {Manage_Versions_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const manage_versions_title: ((inputs?: Manage_Versions_TitleInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Manage_Versions_TitleInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Manage_Versions_TitleInputs = {};
