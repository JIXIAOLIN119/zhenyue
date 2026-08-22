/**
* | output |
* | --- |
* | "Permanently deleted" |
*
* @param {Permanently_DeletedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const permanently_deleted: ((inputs?: Permanently_DeletedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Permanently_DeletedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Permanently_DeletedInputs = {};
