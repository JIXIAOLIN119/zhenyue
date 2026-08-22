/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_Update_FieldInputs */

const zh_failed_update_field = /** @type {(inputs: Failed_Update_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新字段失败`)
};

const en_failed_update_field = /** @type {(inputs: Failed_Update_FieldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to update field`)
};

/**
* | output |
* | --- |
* | "Failed to update field" |
*
* @param {Failed_Update_FieldInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_update_field = /** @type {((inputs?: Failed_Update_FieldInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_Update_FieldInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_update_field(inputs)
	return en_failed_update_field(inputs)
});