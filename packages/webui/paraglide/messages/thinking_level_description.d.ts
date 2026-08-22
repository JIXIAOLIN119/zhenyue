/**
* | output |
* | --- |
* | "Control the depth of reasoning for complex tasks." |
*
* @param {Thinking_Level_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const thinking_level_description: ((inputs?: Thinking_Level_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Thinking_Level_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Thinking_Level_DescriptionInputs = {};
