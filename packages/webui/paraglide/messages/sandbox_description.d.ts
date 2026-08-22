/**
* | output |
* | --- |
* | "Configure security and network restrictions for the AI agent." |
*
* @param {Sandbox_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sandbox_description: ((inputs?: Sandbox_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Sandbox_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Sandbox_DescriptionInputs = {};
