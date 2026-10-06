/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Custom_FieldsInputs */

const zh_custom_fields = /** @type {(inputs: Custom_FieldsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自定义字段`)
};

const en_custom_fields = /** @type {(inputs: Custom_FieldsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Custom Fields`)
};

/**
* | output |
* | --- |
* | "Custom Fields" |
*
* @param {Custom_FieldsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const custom_fields = /** @type {((inputs?: Custom_FieldsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Custom_FieldsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_custom_fields(inputs)
	return en_custom_fields(inputs)
});