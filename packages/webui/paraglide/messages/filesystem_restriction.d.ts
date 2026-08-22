/**
* | output |
* | --- |
* | "Filesystem Restriction" |
*
* @param {Filesystem_RestrictionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const filesystem_restriction: ((inputs?: Filesystem_RestrictionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Filesystem_RestrictionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Filesystem_RestrictionInputs = {};
