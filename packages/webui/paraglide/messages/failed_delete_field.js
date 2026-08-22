/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_Delete_FieldInputs */

const zh_failed_delete_field = /** @type {(inputs: Failed_Delete_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除字段失败`)
};

const en_failed_delete_field = /** @type {(inputs: Failed_Delete_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to delete field`)
};

/**
* | output |
* | --- |
* | "Failed to delete field" |
*
* @param {Failed_Delete_FieldInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_delete_field = /** @type {((inputs?: Failed_Delete_FieldInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_Delete_FieldInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_delete_field(inputs)
	return en_failed_delete_field(inputs)
});