/**
* | output |
* | --- |
* | "Medium" |
*
* @param {Thinking_MediumInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const thinking_medium: ((inputs?: Thinking_MediumInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Thinking_MediumInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Thinking_MediumInputs = {};
