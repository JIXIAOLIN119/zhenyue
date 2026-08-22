/**
* | output |
* | --- |
* | "Enter some text..." |
*
* @param {Enter_Some_TextInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const enter_some_text: ((inputs?: Enter_Some_TextInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Enter_Some_TextInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Enter_Some_TextInputs = {};
