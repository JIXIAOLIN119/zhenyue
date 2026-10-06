/**
* | output |
* | --- |
* | "Manage versions" |
*
* @param {Manage_VersionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const manage_versions: ((inputs?: Manage_VersionsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Manage_VersionsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Manage_VersionsInputs = {};
