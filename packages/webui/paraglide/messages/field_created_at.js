/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Field_Created_AtInputs */

const zh_field_created_at = /** @type {(inputs: Field_Created_AtInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建时间`)
};

const en_field_created_at = /** @type {(inputs: Field_Created_AtInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Created At`)
};

/**
* | output |
* | --- |
* | "Created At" |
*
* @param {Field_Created_AtInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const field_created_at = /** @type {((inputs?: Field_Created_AtInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Field_Created_AtInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_field_created_at(inputs)
	return en_field_created_at(inputs)
});