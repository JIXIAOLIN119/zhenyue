/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Try_Adjusting_SpellingInputs */

const zh_try_adjusting_spelling = /** @type {(inputs: Try_Adjusting_SpellingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请尝试调整拼写或移除筛选条件。`)
};

const en_try_adjusting_spelling = /** @type {(inputs: Try_Adjusting_SpellingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try adjusting spelling or removing filter rows.`)
};

/**
* | output |
* | --- |
* | "Try adjusting spelling or removing filter rows." |
*
* @param {Try_Adjusting_SpellingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const try_adjusting_spelling = /** @type {((inputs?: Try_Adjusting_SpellingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Try_Adjusting_SpellingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_try_adjusting_spelling(inputs)
	return en_try_adjusting_spelling(inputs)
});