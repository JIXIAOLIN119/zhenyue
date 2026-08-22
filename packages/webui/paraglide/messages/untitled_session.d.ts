/**
* | output |
* | --- |
* | "Untitled Session" |
*
* @param {Untitled_SessionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const untitled_session: ((inputs?: Untitled_SessionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Untitled_SessionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Untitled_SessionInputs = {};
