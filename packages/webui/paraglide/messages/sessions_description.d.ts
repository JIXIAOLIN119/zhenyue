/**
* | output |
* | --- |
* | "View and inspect all agent sessions created within the team." |
*
* @param {Sessions_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sessions_description: ((inputs?: Sessions_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Sessions_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Sessions_DescriptionInputs = {};
