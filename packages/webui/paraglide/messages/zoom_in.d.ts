/**
* | output |
* | --- |
* | "Zoom In" |
*
* @param {Zoom_InInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const zoom_in: ((inputs?: Zoom_InInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Zoom_InInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Zoom_InInputs = {};
