/**
* | output |
* | --- |
* | "Name is required" |
*
* @param {Name_Is_RequiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const name_is_required: ((inputs?: Name_Is_RequiredInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Name_Is_RequiredInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Name_Is_RequiredInputs = {};
