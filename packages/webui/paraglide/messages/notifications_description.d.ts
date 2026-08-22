/**
* | output |
* | --- |
* | "Configure your personal notification preferences for this team." |
*
* @param {Notifications_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const notifications_description: ((inputs?: Notifications_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Notifications_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Notifications_DescriptionInputs = {};
