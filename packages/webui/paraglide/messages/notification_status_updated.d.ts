/**
* | output |
* | --- |
* | "{creator} updated status of {asset}" |
*
* @param {Notification_Status_UpdatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const notification_status_updated: ((inputs: Notification_Status_UpdatedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Notification_Status_UpdatedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Notification_Status_UpdatedInputs = {
    creator: NonNullable<unknown>;
    asset: NonNullable<unknown>;
};
