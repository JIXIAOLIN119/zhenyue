/**
* | output |
* | --- |
* | "Error: {message}" |
*
* @param {Error_MessageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const error_message: ((inputs: Error_MessageInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Error_MessageInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Error_MessageInputs = {
    message: NonNullable<unknown>;
};
