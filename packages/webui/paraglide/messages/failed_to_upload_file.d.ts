/**
* | output |
* | --- |
* | "Failed to upload file: {name}" |
*
* @param {Failed_To_Upload_FileInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_upload_file: ((inputs: Failed_To_Upload_FileInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Failed_To_Upload_FileInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Failed_To_Upload_FileInputs = {
    name: NonNullable<unknown>;
};
