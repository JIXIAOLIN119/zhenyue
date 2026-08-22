/**
* | output |
* | --- |
* | "Demo Access:" |
*
* @param {Demo_AccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const demo_access: ((inputs?: Demo_AccessInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Demo_AccessInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Demo_AccessInputs = {};
