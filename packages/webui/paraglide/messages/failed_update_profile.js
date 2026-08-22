/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_Update_ProfileInputs */

const zh_failed_update_profile = /** @type {(inputs: Failed_Update_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新个人资料失败`)
};

const en_failed_update_profile = /** @type {(inputs: Failed_Update_ProfileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to update profile`)
};

/**
* | output |
* | --- |
* | "Failed to update profile" |
*
* @param {Failed_Update_ProfileInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_update_profile = /** @type {((inputs?: Failed_Update_ProfileInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_Update_ProfileInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_update_profile(inputs)
	return en_failed_update_profile(inputs)
});