/**
* | output |
* | --- |
* | "Only team owners can access the dashboard." |
*
* @param {Only_Owner_DashboardInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const only_owner_dashboard: ((inputs?: Only_Owner_DashboardInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Only_Owner_DashboardInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Only_Owner_DashboardInputs = {};
