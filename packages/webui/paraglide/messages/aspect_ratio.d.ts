/**
* | output |
* | --- |
* | "Aspect Ratio" |
*
* @param {Aspect_RatioInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const aspect_ratio: ((inputs?: Aspect_RatioInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Aspect_RatioInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Aspect_RatioInputs = {};
