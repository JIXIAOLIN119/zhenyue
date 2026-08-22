/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} FieldsInputs */

const zh_fields = /** @type {(inputs: FieldsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`字段`)
};

const en_fields = /** @type {(inputs: FieldsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fields`)
};

/**
* | output |
* | --- |
* | "Fields" |
*
* @param {FieldsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const fields = /** @type {((inputs?: FieldsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<FieldsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_fields(inputs)
	return en_fields(inputs)
});