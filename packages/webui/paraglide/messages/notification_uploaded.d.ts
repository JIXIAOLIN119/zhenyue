/**
* | output |
* | --- |
* | "{creator} uploaded {asset} to {project}" |
*
* @param {Notification_UploadedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const notification_uploaded: ((inputs: Notification_UploadedInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Notification_UploadedInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Notification_UploadedInputs = {
    creator: NonNullable<unknown>;
    asset: NonNullable<unknown>;
    project: NonNullable<unknown>;
};
