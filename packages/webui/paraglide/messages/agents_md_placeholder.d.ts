/**
* | output |
* | --- |
* | "Give AI agents instructions and context for this project or folder. ZhenYue automatically loads this file, along with AGENTS.md files from parent folders up ..." |
*
* @param {Agents_Md_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agents_md_placeholder: ((inputs?: Agents_Md_PlaceholderInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agents_Md_PlaceholderInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agents_Md_PlaceholderInputs = {};
