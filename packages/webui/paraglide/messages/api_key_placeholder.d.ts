/**
* | output |
* | --- |
* | "Enter API Key or Environment Variable" |
*
* @param {Api_Key_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const api_key_placeholder: ((inputs?: Api_Key_PlaceholderInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Api_Key_PlaceholderInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Api_Key_PlaceholderInputs = {};
