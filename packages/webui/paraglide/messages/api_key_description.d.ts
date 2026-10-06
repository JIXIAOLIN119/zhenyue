/**
* | output |
* | --- |
* | "You can provide a literal value (e.g. sk-...) or an Environment variable name (e.g. MY_API_KEY)." |
*
* @param {Api_Key_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const api_key_description: ((inputs?: Api_Key_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Api_Key_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Api_Key_DescriptionInputs = {};
