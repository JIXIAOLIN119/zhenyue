/**
* | output |
* | --- |
* | "Audit Logs" |
*
* @param {Audit_LogsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const audit_logs: ((inputs?: Audit_LogsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Audit_LogsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Audit_LogsInputs = {};
