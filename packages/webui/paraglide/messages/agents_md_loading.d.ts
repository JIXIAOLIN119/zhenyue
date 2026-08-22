/**
* | output |
* | --- |
* | "Loading AGENTS.md..." |
*
* @param {Agents_Md_LoadingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agents_md_loading: ((inputs?: Agents_Md_LoadingInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agents_Md_LoadingInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agents_Md_LoadingInputs = {};
