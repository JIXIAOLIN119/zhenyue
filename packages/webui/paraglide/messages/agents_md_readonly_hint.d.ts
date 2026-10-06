/**
* | output |
* | --- |
* | "Only team owners can edit this file." |
*
* @param {Agents_Md_Readonly_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agents_md_readonly_hint: ((inputs?: Agents_Md_Readonly_HintInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agents_Md_Readonly_HintInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agents_Md_Readonly_HintInputs = {};
