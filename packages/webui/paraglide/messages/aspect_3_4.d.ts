/**
* | output |
* | --- |
* | "3:4 Portrait" |
*
* @param {Aspect_3_4Inputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const aspect_3_4: ((inputs?: Aspect_3_4Inputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Aspect_3_4Inputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Aspect_3_4Inputs = {};
