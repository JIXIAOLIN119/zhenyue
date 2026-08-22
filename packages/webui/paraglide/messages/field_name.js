/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Field_NameInputs */

const zh_field_name = /** @type {(inputs: Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`字段名称`)
};

const en_field_name = /** @type {(inputs: Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field Name`)
};

/**
* | output |
* | --- |
* | "Field Name" |
*
* @param {Field_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const field_name = /** @type {((inputs?: Field_NameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Field_NameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_field_name(inputs)
	return en_field_name(inputs)
});