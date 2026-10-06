/**
* | output |
* | --- |
* | "Receive in-app updates for comments, uploads, and automated background analysis tasks inside this project." |
*
* @param {Activity_Notifications_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const activity_notifications_description: ((inputs?: Activity_Notifications_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Activity_Notifications_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Activity_Notifications_DescriptionInputs = {};
