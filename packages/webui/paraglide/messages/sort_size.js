/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Sort_SizeInputs */

const zh_sort_size = /** @type {(inputs: Sort_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`大小`)
};

const en_sort_size = /** @type {(inputs: Sort_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Size`)
};

/**
* | output |
* | --- |
* | "Size" |
*
* @param {Sort_SizeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const sort_size = /** @type {((inputs?: Sort_SizeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Sort_SizeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_sort_size(inputs)
	return en_sort_size(inputs)
});