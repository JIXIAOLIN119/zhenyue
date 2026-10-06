/**
* | output |
* | --- |
* | "Enter your credentials to access your account." |
*
* @param {Login_SubtitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_subtitle: ((inputs?: Login_SubtitleInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Login_SubtitleInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Login_SubtitleInputs = {};
