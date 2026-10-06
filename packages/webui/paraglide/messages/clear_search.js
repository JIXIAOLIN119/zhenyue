/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Clear_SearchInputs */

const zh_clear_search = /** @type {(inputs: Clear_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清除搜索`)
};

const en_clear_search = /** @type {(inputs: Clear_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear search`)
};

/**
* | output |
* | --- |
* | "Clear search" |
*
* @param {Clear_SearchInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const clear_search = /** @type {((inputs?: Clear_SearchInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Clear_SearchInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_clear_search(inputs)
	return en_clear_search(inputs)
});