/**
* | output |
* | --- |
* | "Zoom Out" |
*
* @param {Zoom_OutInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const zoom_out: ((inputs?: Zoom_OutInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Zoom_OutInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Zoom_OutInputs = {};
