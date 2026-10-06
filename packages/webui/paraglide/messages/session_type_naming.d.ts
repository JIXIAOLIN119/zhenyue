/**
* | output |
* | --- |
* | "Naming" |
*
* @param {Session_Type_NamingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const session_type_naming: ((inputs?: Session_Type_NamingInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Session_Type_NamingInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Session_Type_NamingInputs = {};
