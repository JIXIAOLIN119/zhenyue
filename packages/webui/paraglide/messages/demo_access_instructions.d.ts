/**
* | output |
* | --- |
* | "Use \"foo@bar.com\" as the email and \"foo\" as the password to login." |
*
* @param {Demo_Access_InstructionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const demo_access_instructions: ((inputs?: Demo_Access_InstructionsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Demo_Access_InstructionsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Demo_Access_InstructionsInputs = {};
