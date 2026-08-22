/**
* | output |
* | --- |
* | "{uploaded} / {total} files" |
*
* @param {Files_ProgressInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const files_progress: ((inputs: Files_ProgressInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Files_ProgressInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Files_ProgressInputs = {
    uploaded: NonNullable<unknown>;
    total: NonNullable<unknown>;
};
