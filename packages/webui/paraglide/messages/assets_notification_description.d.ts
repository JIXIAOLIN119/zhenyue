/**
* | output |
* | --- |
* | "Manage notifications related to file uploads and metadata field status updates." |
*
* @param {Assets_Notification_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const assets_notification_description: ((inputs?: Assets_Notification_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Assets_Notification_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Assets_Notification_DescriptionInputs = {};
