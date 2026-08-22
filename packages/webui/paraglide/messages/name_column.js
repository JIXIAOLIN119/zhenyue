/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Name_ColumnInputs */

const zh_name_column = /** @type {(inputs: Name_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名称`)
};

const en_name_column = /** @type {(inputs: Name_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name`)
};

/**
* | output |
* | --- |
* | "Name" |
*
* @param {Name_ColumnInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const name_column = /** @type {((inputs?: Name_ColumnInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Name_ColumnInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_name_column(inputs)
	return en_name_column(inputs)
});