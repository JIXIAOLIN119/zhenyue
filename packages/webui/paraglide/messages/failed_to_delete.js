/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_To_DeleteInputs */

const zh_failed_to_delete = /** @type {(inputs: Failed_To_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除失败`)
};

const en_failed_to_delete = /** @type {(inputs: Failed_To_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to delete`)
};

/**
* | output |
* | --- |
* | "Failed to delete" |
*
* @param {Failed_To_DeleteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_delete = /** @type {((inputs?: Failed_To_DeleteInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_To_DeleteInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_to_delete(inputs)
	return en_failed_to_delete(inputs)
});