/**
* | output |
* | --- |
* | "Where" |
*
* @param {Filter_WhereInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const filter_where: ((inputs?: Filter_WhereInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Filter_WhereInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Filter_WhereInputs = {};
