/**
* | output |
* | --- |
* | "Autofilling metadata..." |
*
* @param {Autofilling_MetadataInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const autofilling_metadata: ((inputs?: Autofilling_MetadataInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Autofilling_MetadataInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Autofilling_MetadataInputs = {};
