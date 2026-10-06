/**
* | output |
* | --- |
* | "Unknown User" |
*
* @param {Unknown_UserInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const unknown_user: ((inputs?: Unknown_UserInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Unknown_UserInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Unknown_UserInputs = {};
