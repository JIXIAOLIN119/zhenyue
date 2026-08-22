/**
* | output |
* | --- |
* | "Assets & Statuses" |
*
* @param {Assets_And_StatusesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const assets_and_statuses: ((inputs?: Assets_And_StatusesInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Assets_And_StatusesInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Assets_And_StatusesInputs = {};
