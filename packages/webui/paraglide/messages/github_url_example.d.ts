/**
* | output |
* | --- |
* | "Example: https://github.com/google/gemini-cli" |
*
* @param {Github_Url_ExampleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const github_url_example: ((inputs?: Github_Url_ExampleInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Github_Url_ExampleInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Github_Url_ExampleInputs = {};
