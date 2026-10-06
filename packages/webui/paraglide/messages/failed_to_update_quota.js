/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_To_Update_QuotaInputs */

const zh_failed_to_update_quota = /** @type {(inputs: Failed_To_Update_QuotaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新配额规则失败`)
};

const en_failed_to_update_quota = /** @type {(inputs: Failed_To_Update_QuotaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to update quota rule`)
};

/**
* | output |
* | --- |
* | "Failed to update quota rule" |
*
* @param {Failed_To_Update_QuotaInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_update_quota = /** @type {((inputs?: Failed_To_Update_QuotaInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_To_Update_QuotaInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_to_update_quota(inputs)
	return en_failed_to_update_quota(inputs)
});