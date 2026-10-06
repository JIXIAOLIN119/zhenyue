/**
* | output |
* | --- |
* | "Save Changes" |
*
* @param {Save_ChangesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const save_changes: ((inputs?: Save_ChangesInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Save_ChangesInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Save_ChangesInputs = {};
