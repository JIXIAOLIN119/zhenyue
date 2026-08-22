/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Field_Created_SuccessfullyInputs */

const zh_field_created_successfully = /** @type {(inputs: Field_Created_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`字段创建成功`)
};

const en_field_created_successfully = /** @type {(inputs: Field_Created_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field created successfully`)
};

/**
* | output |
* | --- |
* | "Field created successfully" |
*
* @param {Field_Created_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const field_created_successfully = /** @type {((inputs?: Field_Created_SuccessfullyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Field_Created_SuccessfullyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_field_created_successfully(inputs)
	return en_field_created_successfully(inputs)
});