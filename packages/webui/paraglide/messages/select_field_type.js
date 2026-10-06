/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_Field_TypeInputs */

const zh_select_field_type = /** @type {(inputs: Select_Field_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择字段类型`)
};

const en_select_field_type = /** @type {(inputs: Select_Field_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select field type`)
};

/**
* | output |
* | --- |
* | "Select field type" |
*
* @param {Select_Field_TypeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_field_type = /** @type {((inputs?: Select_Field_TypeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_Field_TypeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_field_type(inputs)
	return en_select_field_type(inputs)
});