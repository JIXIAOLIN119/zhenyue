/**
* | output |
* | --- |
* | "active" |
*
* @param {Active_FiltersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const active_filters: ((inputs?: Active_FiltersInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Active_FiltersInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Active_FiltersInputs = {};
