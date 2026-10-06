/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_Delete_PermanentlyInputs */

const zh_failed_delete_permanently = /** @type {(inputs: Failed_Delete_PermanentlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`永久删除失败`)
};

const en_failed_delete_permanently = /** @type {(inputs: Failed_Delete_PermanentlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to delete permanently`)
};

/**
* | output |
* | --- |
* | "Failed to delete permanently" |
*
* @param {Failed_Delete_PermanentlyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_delete_permanently = /** @type {((inputs?: Failed_Delete_PermanentlyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_Delete_PermanentlyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_delete_permanently(inputs)
	return en_failed_delete_permanently(inputs)
});