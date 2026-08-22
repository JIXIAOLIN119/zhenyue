/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Size_PrefixInputs */

const zh_size_prefix = /** @type {(inputs: Size_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`大小：`)
};

const en_size_prefix = /** @type {(inputs: Size_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Size:`)
};

/**
* | output |
* | --- |
* | "Size:" |
*
* @param {Size_PrefixInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const size_prefix = /** @type {((inputs?: Size_PrefixInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Size_PrefixInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_size_prefix(inputs)
	return en_size_prefix(inputs)
});