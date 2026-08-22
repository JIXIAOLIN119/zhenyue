/**
* | output |
* | --- |
* | "View and monitor all audit logs of team actions." |
*
* @param {Audit_Logs_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const audit_logs_description: ((inputs?: Audit_Logs_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Audit_Logs_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Audit_Logs_DescriptionInputs = {};
