/**
* | output |
* | --- |
* | "Member removed" |
*
* @param {Member_RemovedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const member_removed: ((inputs?: Member_RemovedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Member_RemovedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Member_RemovedInputs = {};
