/**
* | output |
* | --- |
* | "Cache Read Tokens" |
*
* @param {Cache_Read_TokensInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const cache_read_tokens: ((inputs?: Cache_Read_TokensInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Cache_Read_TokensInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Cache_Read_TokensInputs = {};
