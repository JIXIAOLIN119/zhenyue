/**
* | output |
* | --- |
* | "GitHub Repository URL" |
*
* @param {Github_Repository_UrlInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const github_repository_url: ((inputs?: Github_Repository_UrlInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Github_Repository_UrlInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Github_Repository_UrlInputs = {};
