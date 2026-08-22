/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_FieldInputs */

const zh_select_field = /** @type {(inputs: Select_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择字段`)
};

const en_select_field = /** @type {(inputs: Select_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select field`)
};

/**
* | output |
* | --- |
* | "Select field" |
*
* @param {Select_FieldInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_field = /** @type {((inputs?: Select_FieldInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_FieldInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_field(inputs)
	return en_select_field(inputs)
});