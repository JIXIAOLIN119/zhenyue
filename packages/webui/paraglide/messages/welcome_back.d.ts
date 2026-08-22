/**
* | output |
* | --- |
* | "Welcome Back" |
*
* @param {Welcome_BackInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const welcome_back: ((inputs?: Welcome_BackInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Welcome_BackInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Welcome_BackInputs = {};
