/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_ResultsInputs */

const zh_search_results = /** @type {(inputs: Search_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索结果`)
};

const en_search_results = /** @type {(inputs: Search_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search Results`)
};

/**
* | output |
* | --- |
* | "Search Results" |
*
* @param {Search_ResultsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search_results = /** @type {((inputs?: Search_ResultsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_ResultsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_search_results(inputs)
	return en_search_results(inputs)
});