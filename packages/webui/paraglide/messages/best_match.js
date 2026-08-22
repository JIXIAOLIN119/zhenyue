/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Best_MatchInputs */

const zh_best_match = /** @type {(inputs: Best_MatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最佳匹配`)
};

const en_best_match = /** @type {(inputs: Best_MatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Best match`)
};

/**
* | output |
* | --- |
* | "Best match" |
*
* @param {Best_MatchInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const best_match = /** @type {((inputs?: Best_MatchInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Best_MatchInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_best_match(inputs)
	return en_best_match(inputs)
});