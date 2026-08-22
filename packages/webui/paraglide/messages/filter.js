/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} FilterInputs */

const zh_filter = /** @type {(inputs: FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`筛选`)
};

const en_filter = /** @type {(inputs: FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter`)
};

/**
* | output |
* | --- |
* | "Filter" |
*
* @param {FilterInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const filter = /** @type {((inputs?: FilterInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<FilterInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_filter(inputs)
	return en_filter(inputs)
});