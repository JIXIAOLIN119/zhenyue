/**
* | output |
* | --- |
* | "Video Strategy" |
*
* @param {Video_StrategyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const video_strategy: ((inputs?: Video_StrategyInputs, options?: {
    locale?: "zh" | "en";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Video_StrategyInputs, {
    locale?: "zh" | "en";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Video_StrategyInputs = {};
