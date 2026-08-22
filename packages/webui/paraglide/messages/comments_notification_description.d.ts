/**
* | output |
* | --- |
* | "Control notification preferences when other users comment on assets you collaborate on or mention you." |
*
* @param {Comments_Notification_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_notification_description: ((inputs?: Comments_Notification_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Comments_Notification_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Comments_Notification_DescriptionInputs = {};
