/**
* | output |
* | --- |
* | "Page {current} of {total}" |
*
* @param {Page_Of_PagesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const page_of_pages: ((inputs: Page_Of_PagesInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Page_Of_PagesInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Page_Of_PagesInputs = {
    current: NonNullable<unknown>;
    total: NonNullable<unknown>;
};
