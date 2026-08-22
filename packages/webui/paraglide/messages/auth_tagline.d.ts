/**
* | output |
* | --- |
* | "One workspace for all your creative assets." |
*
* @param {Auth_TaglineInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const auth_tagline: ((inputs?: Auth_TaglineInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Auth_TaglineInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Auth_TaglineInputs = {};
