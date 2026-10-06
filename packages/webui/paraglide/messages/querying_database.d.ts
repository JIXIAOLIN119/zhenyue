/**
* | output |
* | --- |
* | "Querying database..." |
*
* @param {Querying_DatabaseInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const querying_database: ((inputs?: Querying_DatabaseInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Querying_DatabaseInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Querying_DatabaseInputs = {};
