/**
* | output |
* | --- |
* | "Pending Domain Approvals" |
*
* @param {Pending_Domain_ApprovalsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const pending_domain_approvals: ((inputs?: Pending_Domain_ApprovalsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Pending_Domain_ApprovalsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Pending_Domain_ApprovalsInputs = {};
