/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modified_ColumnInputs */

const zh_modified_column = /** @type {(inputs: Modified_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修改时间`)
};

const en_modified_column = /** @type {(inputs: Modified_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modified`)
};

/**
* | output |
* | --- |
* | "Modified" |
*
* @param {Modified_ColumnInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const modified_column = /** @type {((inputs?: Modified_ColumnInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modified_ColumnInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_modified_column(inputs)
	return en_modified_column(inputs)
});