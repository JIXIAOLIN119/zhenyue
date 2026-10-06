/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Delete_FieldInputs */

const zh_delete_field = /** @type {(inputs: Delete_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除字段`)
};

const en_delete_field = /** @type {(inputs: Delete_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete field`)
};

/**
* | output |
* | --- |
* | "Delete field" |
*
* @param {Delete_FieldInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_field = /** @type {((inputs?: Delete_FieldInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Delete_FieldInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_delete_field(inputs)
	return en_delete_field(inputs)
});