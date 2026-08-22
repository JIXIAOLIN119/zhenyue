/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Video_StrategyInputs */

const zh_video_strategy = /** @type {(inputs: Video_StrategyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`视频策略`)
};

const en_video_strategy = /** @type {(inputs: Video_StrategyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Video Strategy`)
};

/**
* | output |
* | --- |
* | "Video Strategy" |
*
* @param {Video_StrategyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const video_strategy = /** @type {((inputs?: Video_StrategyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Video_StrategyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_video_strategy(inputs)
	return en_video_strategy(inputs)
});