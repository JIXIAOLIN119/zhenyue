/**
* | output |
* | --- |
* | "Thinking" |
*
* @param {Role_ThinkingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const role_thinking: ((inputs?: Role_ThinkingInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Role_ThinkingInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Role_ThinkingInputs = {};
