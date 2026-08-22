/**
* | output |
* | --- |
* | "Instant asset uploads & high-fidelity media players" |
*
* @param {Auth_Feature_UploadsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const auth_feature_uploads: ((inputs?: Auth_Feature_UploadsInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Auth_Feature_UploadsInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Auth_Feature_UploadsInputs = {};
