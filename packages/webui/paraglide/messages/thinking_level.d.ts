/**
* | output |
* | --- |
* | "Thinking Level" |
*
* @param {Thinking_LevelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const thinking_level: ((inputs?: Thinking_LevelInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Thinking_LevelInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Thinking_LevelInputs = {};
