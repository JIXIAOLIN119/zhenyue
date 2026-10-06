/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ query: NonNullable<unknown> }} Try_Adjusting_SearchInputs */

const zh_try_adjusting_search = /** @type {(inputs: Try_Adjusting_SearchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`请尝试调整搜索 "${i?.query}"`)
};

const en_try_adjusting_search = /** @type {(inputs: Try_Adjusting_SearchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Try adjusting your search for "${i?.query}"`)
};

/**
* | output |
* | --- |
* | "Try adjusting your search for \"{query}\"" |
*
* @param {Try_Adjusting_SearchInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const try_adjusting_search = /** @type {((inputs: Try_Adjusting_SearchInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Try_Adjusting_SearchInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_try_adjusting_search(inputs)
	return en_try_adjusting_search(inputs)
});