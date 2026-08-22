/**
* | output |
* | --- |
* | "No audit logs found" |
*
* @param {No_Audit_LogsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_audit_logs: ((inputs?: No_Audit_LogsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<No_Audit_LogsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type No_Audit_LogsInputs = {};
