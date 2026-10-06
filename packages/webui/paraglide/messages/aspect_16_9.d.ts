/**
* | output |
* | --- |
* | "16:9 Widescreen" |
*
* @param {Aspect_16_9Inputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const aspect_16_9: ((inputs?: Aspect_16_9Inputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Aspect_16_9Inputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Aspect_16_9Inputs = {};
