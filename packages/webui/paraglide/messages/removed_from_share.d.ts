/**
* | output |
* | --- |
* | "Removed from share" |
*
* @param {Removed_From_ShareInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const removed_from_share: ((inputs?: Removed_From_ShareInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Removed_From_ShareInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Removed_From_ShareInputs = {};
