/**
* | output |
* | --- |
* | "unknown project" |
*
* @param {Unknown_ProjectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const unknown_project: ((inputs?: Unknown_ProjectInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Unknown_ProjectInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Unknown_ProjectInputs = {};
