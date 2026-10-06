/**
* | output |
* | --- |
* | "Try adjusting your search for \"{query}\"" |
*
* @param {Try_Adjusting_SearchInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const try_adjusting_search: ((inputs: Try_Adjusting_SearchInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Try_Adjusting_SearchInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Try_Adjusting_SearchInputs = {
    query: NonNullable<unknown>;
};
