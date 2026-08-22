/**
* | output |
* | --- |
* | "Domain already exists" |
*
* @param {Domain_Already_ExistsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const domain_already_exists: ((inputs?: Domain_Already_ExistsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Domain_Already_ExistsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Domain_Already_ExistsInputs = {};
