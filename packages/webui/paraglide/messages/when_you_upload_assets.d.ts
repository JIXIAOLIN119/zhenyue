/**
* | output |
* | --- |
* | "When you upload assets" |
*
* @param {When_You_Upload_AssetsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const when_you_upload_assets: ((inputs?: When_You_Upload_AssetsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<When_You_Upload_AssetsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type When_You_Upload_AssetsInputs = {};
