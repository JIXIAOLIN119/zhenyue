/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_To_Reset_QuotaInputs */

const zh_failed_to_reset_quota = /** @type {(inputs: Failed_To_Reset_QuotaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重置配额使用量失败`)
};

const en_failed_to_reset_quota = /** @type {(inputs: Failed_To_Reset_QuotaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to reset quota usage`)
};

/**
* | output |
* | --- |
* | "Failed to reset quota usage" |
*
* @param {Failed_To_Reset_QuotaInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_reset_quota = /** @type {((inputs?: Failed_To_Reset_QuotaInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_To_Reset_QuotaInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_to_reset_quota(inputs)
	return en_failed_to_reset_quota(inputs)
});