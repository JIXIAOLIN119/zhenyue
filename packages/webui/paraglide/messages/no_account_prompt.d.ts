/**
* | output |
* | --- |
* | "Don't have an account?" |
*
* @param {No_Account_PromptInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_account_prompt: ((inputs?: No_Account_PromptInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<No_Account_PromptInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type No_Account_PromptInputs = {};
