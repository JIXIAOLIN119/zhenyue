/**
* | output |
* | --- |
* | "Strategy: We select the best resolution from your list that supports the input quality. Content is never upscaled." |
*
* @param {Transcode_Strategy_NoteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const transcode_strategy_note: ((inputs?: Transcode_Strategy_NoteInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Transcode_Strategy_NoteInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Transcode_Strategy_NoteInputs = {};
