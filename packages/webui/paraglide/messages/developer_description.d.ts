/**
* | output |
* | --- |
* | "Generate and manage API keys for developers and automated workflows." |
*
* @param {Developer_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const developer_description: ((inputs?: Developer_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Developer_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Developer_DescriptionInputs = {};
