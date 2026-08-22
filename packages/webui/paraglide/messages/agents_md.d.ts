/**
* | output |
* | --- |
* | "AGENTS.md" |
*
* @param {Agents_MdInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const agents_md: ((inputs?: Agents_MdInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Agents_MdInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Agents_MdInputs = {};
