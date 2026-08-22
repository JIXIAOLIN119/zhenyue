/**
* | output |
* | --- |
* | "Providers" |
*
* @param {ProvidersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const providers: ((inputs?: ProvidersInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<ProvidersInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type ProvidersInputs = {};
