/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_To_Load_Quota_UsageInputs */

const zh_failed_to_load_quota_usage = /** @type {(inputs: Failed_To_Load_Quota_UsageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载配额使用量失败`)
};

const en_failed_to_load_quota_usage = /** @type {(inputs: Failed_To_Load_Quota_UsageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to load quota usage`)
};

/**
* | output |
* | --- |
* | "Failed to load quota usage" |
*
* @param {Failed_To_Load_Quota_UsageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_load_quota_usage = /** @type {((inputs?: Failed_To_Load_Quota_UsageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_To_Load_Quota_UsageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_to_load_quota_usage(inputs)
	return en_failed_to_load_quota_usage(inputs)
});