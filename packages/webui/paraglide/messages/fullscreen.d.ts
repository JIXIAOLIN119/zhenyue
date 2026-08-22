/**
* | output |
* | --- |
* | "Fullscreen" |
*
* @param {FullscreenInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const fullscreen: ((inputs?: FullscreenInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<FullscreenInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type FullscreenInputs = {};
