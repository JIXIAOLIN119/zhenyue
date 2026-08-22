/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_Update_Fields_OrderInputs */

const zh_failed_update_fields_order = /** @type {(inputs: Failed_Update_Fields_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新字段排序失败`)
};

const en_failed_update_fields_order = /** @type {(inputs: Failed_Update_Fields_OrderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to update fields order`)
};

/**
* | output |
* | --- |
* | "Failed to update fields order" |
*
* @param {Failed_Update_Fields_OrderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_update_fields_order = /** @type {((inputs?: Failed_Update_Fields_OrderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_Update_Fields_OrderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_update_fields_order(inputs)
	return en_failed_update_fields_order(inputs)
});