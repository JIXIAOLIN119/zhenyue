/**
* | output |
* | --- |
* | "When someone changes an asset's status" |
*
* @param {When_Someone_Changes_StatusInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const when_someone_changes_status: ((inputs?: When_Someone_Changes_StatusInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<When_Someone_Changes_StatusInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type When_Someone_Changes_StatusInputs = {};
