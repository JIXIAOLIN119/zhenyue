/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Sort_ByInputs */

const zh_sort_by = /** @type {(inputs: Sort_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`排序`)
};

const en_sort_by = /** @type {(inputs: Sort_ByInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sort by`)
};

/**
* | output |
* | --- |
* | "Sort by" |
*
* @param {Sort_ByInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sort_by = /** @type {((inputs?: Sort_ByInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Sort_ByInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_sort_by(inputs)
	return en_sort_by(inputs)
});