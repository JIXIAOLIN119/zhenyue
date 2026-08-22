/**
* | output |
* | --- |
* | "Appearance" |
*
* @param {AppearanceInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const appearance: ((inputs?: AppearanceInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<AppearanceInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type AppearanceInputs = {};
