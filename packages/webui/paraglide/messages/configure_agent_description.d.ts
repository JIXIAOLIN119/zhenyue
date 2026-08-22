/**
* | output |
* | --- |
* | "Configure your AI agent's personality and capabilities." |
*
* @param {Configure_Agent_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const configure_agent_description: ((inputs?: Configure_Agent_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Configure_Agent_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Configure_Agent_DescriptionInputs = {};
