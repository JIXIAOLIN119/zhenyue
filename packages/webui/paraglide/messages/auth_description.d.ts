/**
* | output |
* | --- |
* | "Upload and index your files, enrich them with custom metadata schemas, draw annotations directly on media, and gather instant feedback — all in one modern wo..." |
*
* @param {Auth_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const auth_description: ((inputs?: Auth_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Auth_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Auth_DescriptionInputs = {};
