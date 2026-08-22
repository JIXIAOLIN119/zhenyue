/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_Create_FieldInputs */

const zh_failed_create_field = /** @type {(inputs: Failed_Create_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建字段失败`)
};

const en_failed_create_field = /** @type {(inputs: Failed_Create_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to create field`)
};

/**
* | output |
* | --- |
* | "Failed to create field" |
*
* @param {Failed_Create_FieldInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_create_field = /** @type {((inputs?: Failed_Create_FieldInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_Create_FieldInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_create_field(inputs)
	return en_failed_create_field(inputs)
});