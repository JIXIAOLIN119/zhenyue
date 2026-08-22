/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} SizeInputs */

const zh_size = /** @type {(inputs: SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`大小`)
};

const en_size = /** @type {(inputs: SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Size`)
};

/**
* | output |
* | --- |
* | "Size" |
*
* @param {SizeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const size = /** @type {((inputs?: SizeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<SizeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_size(inputs)
	return en_size(inputs)
});