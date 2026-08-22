export type LocalizedString = import("../runtime.js").LocalizedString;
export type _DeleteInputs = {};
/**
* | output |
* | --- |
* | "Delete" |
*
* @param {_DeleteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
declare const _delete: ((inputs?: _DeleteInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<_DeleteInputs, {
    locale?: "zh" | "en";
}, {}>;
export { _delete as "delete" };
