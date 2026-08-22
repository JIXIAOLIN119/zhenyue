/**
* | output |
* | --- |
* | "Disable" |
*
* @param {Thinking_DisableInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const thinking_disable: ((inputs?: Thinking_DisableInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Thinking_DisableInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Thinking_DisableInputs = {};
