/**
* | output |
* | --- |
* | "Balanced thought" |
*
* @param {Balanced_ThoughtInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const balanced_thought: ((inputs?: Balanced_ThoughtInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Balanced_ThoughtInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Balanced_ThoughtInputs = {};
