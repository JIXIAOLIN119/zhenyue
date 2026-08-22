/**
* | output |
* | --- |
* | "Manage your team's media transcoding configurations." |
*
* @param {Transcode_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const transcode_description: ((inputs?: Transcode_DescriptionInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Transcode_DescriptionInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Transcode_DescriptionInputs = {};
