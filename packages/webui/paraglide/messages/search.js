/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} SearchInputs */

const zh_search = /** @type {(inputs: SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索`)
};

const en_search = /** @type {(inputs: SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search`)
};

/**
* | output |
* | --- |
* | "Search" |
*
* @param {SearchInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const search = /** @type {((inputs?: SearchInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<SearchInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_search(inputs)
	return en_search(inputs)
});