/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Field_TypeInputs */

const zh_field_type = /** @type {(inputs: Field_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`字段类型`)
};

const en_field_type = /** @type {(inputs: Field_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field Type`)
};

/**
* | output |
* | --- |
* | "Field Type" |
*
* @param {Field_TypeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const field_type = /** @type {((inputs?: Field_TypeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Field_TypeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_field_type(inputs)
	return en_field_type(inputs)
});