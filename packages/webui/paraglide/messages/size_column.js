/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Size_ColumnInputs */

const zh_size_column = /** @type {(inputs: Size_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`大小`)
};

const en_size_column = /** @type {(inputs: Size_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Size`)
};

/**
* | output |
* | --- |
* | "Size" |
*
* @param {Size_ColumnInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const size_column = /** @type {((inputs?: Size_ColumnInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Size_ColumnInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_size_column(inputs)
	return en_size_column(inputs)
});