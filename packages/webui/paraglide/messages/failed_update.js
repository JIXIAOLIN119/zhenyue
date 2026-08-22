/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_UpdateInputs */

const zh_failed_update = /** @type {(inputs: Failed_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新失败`)
};

const en_failed_update = /** @type {(inputs: Failed_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to update`)
};

/**
* | output |
* | --- |
* | "Failed to update" |
*
* @param {Failed_UpdateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_update = /** @type {((inputs?: Failed_UpdateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_UpdateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_update(inputs)
	return en_failed_update(inputs)
});