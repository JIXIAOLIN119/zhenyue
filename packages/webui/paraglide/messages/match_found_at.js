/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Match_Found_AtInputs */

const zh_match_found_at = /** @type {(inputs: Match_Found_AtInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在以下位置找到匹配`)
};

const en_match_found_at = /** @type {(inputs: Match_Found_AtInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Match found at`)
};

/**
* | output |
* | --- |
* | "Match found at" |
*
* @param {Match_Found_AtInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const match_found_at = /** @type {((inputs?: Match_Found_AtInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Match_Found_AtInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_match_found_at(inputs)
	return en_match_found_at(inputs)
});