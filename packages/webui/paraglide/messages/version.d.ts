/**
* | output |
* | --- |
* | "Version {version}" |
*
* @param {VersionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const version: ((inputs: VersionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<VersionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type VersionInputs = {
    version: NonNullable<unknown>;
};
