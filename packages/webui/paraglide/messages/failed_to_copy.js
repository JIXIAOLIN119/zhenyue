/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_To_CopyInputs */

const zh_failed_to_copy = /** @type {(inputs: Failed_To_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制失败`)
};

const en_failed_to_copy = /** @type {(inputs: Failed_To_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to copy`)
};

/**
* | output |
* | --- |
* | "Failed to copy" |
*
* @param {Failed_To_CopyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_copy = /** @type {((inputs?: Failed_To_CopyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_To_CopyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_to_copy(inputs)
	return en_failed_to_copy(inputs)
});