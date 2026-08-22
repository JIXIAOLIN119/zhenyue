/**
* | output |
* | --- |
* | "Start building and organizing your space." |
*
* @param {Signup_SubtitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const signup_subtitle: ((inputs?: Signup_SubtitleInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Signup_SubtitleInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Signup_SubtitleInputs = {};
