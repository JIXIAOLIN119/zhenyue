/**
* | output |
* | --- |
* | "At least 3 characters" |
*
* @param {Password_Min_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const password_min_placeholder: ((inputs?: Password_Min_PlaceholderInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Password_Min_PlaceholderInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Password_Min_PlaceholderInputs = {};
