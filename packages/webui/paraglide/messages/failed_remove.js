/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_RemoveInputs */

const zh_failed_remove = /** @type {(inputs: Failed_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除失败`)
};

const en_failed_remove = /** @type {(inputs: Failed_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to remove`)
};

/**
* | output |
* | --- |
* | "Failed to remove" |
*
* @param {Failed_RemoveInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_remove = /** @type {((inputs?: Failed_RemoveInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_RemoveInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_remove(inputs)
	return en_failed_remove(inputs)
});