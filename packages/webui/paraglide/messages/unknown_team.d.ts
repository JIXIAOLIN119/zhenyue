/**
* | output |
* | --- |
* | "unknown team" |
*
* @param {Unknown_TeamInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const unknown_team: ((inputs?: Unknown_TeamInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Unknown_TeamInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Unknown_TeamInputs = {};
