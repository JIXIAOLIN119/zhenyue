export type LocalizedString = import("../runtime.js").LocalizedString;
export type _NewInputs = {};
/**
* | output |
* | --- |
* | "New" |
*
* @param {_NewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
declare const _new: ((inputs?: _NewInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<_NewInputs, {
    locale?: "zh" | "en";
}, {}>;
export { _new as "new" };
