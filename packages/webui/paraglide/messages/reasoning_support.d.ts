/**
* | output |
* | --- |
* | "Reasoning Support" |
*
* @param {Reasoning_SupportInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const reasoning_support: ((inputs?: Reasoning_SupportInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Reasoning_SupportInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Reasoning_SupportInputs = {};
