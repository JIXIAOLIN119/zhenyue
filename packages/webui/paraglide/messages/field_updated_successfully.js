/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Field_Updated_SuccessfullyInputs */

const zh_field_updated_successfully = /** @type {(inputs: Field_Updated_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`字段更新成功`)
};

const en_field_updated_successfully = /** @type {(inputs: Field_Updated_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field updated successfully`)
};

/**
* | output |
* | --- |
* | "Field updated successfully" |
*
* @param {Field_Updated_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const field_updated_successfully = /** @type {((inputs?: Field_Updated_SuccessfullyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Field_Updated_SuccessfullyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_field_updated_successfully(inputs)
	return en_field_updated_successfully(inputs)
});