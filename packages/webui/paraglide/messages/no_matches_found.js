/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Matches_FoundInputs */

const zh_no_matches_found = /** @type {(inputs: No_Matches_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未找到匹配结果`)
};

const en_no_matches_found = /** @type {(inputs: No_Matches_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No matches found`)
};

/**
* | output |
* | --- |
* | "No matches found" |
*
* @param {No_Matches_FoundInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_matches_found = /** @type {((inputs?: No_Matches_FoundInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Matches_FoundInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_matches_found(inputs)
	return en_no_matches_found(inputs)
});