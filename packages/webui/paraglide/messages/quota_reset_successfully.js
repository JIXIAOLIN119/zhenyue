/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_Reset_SuccessfullyInputs */

const zh_quota_reset_successfully = /** @type {(inputs: Quota_Reset_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配额使用量重置成功`)
};

const en_quota_reset_successfully = /** @type {(inputs: Quota_Reset_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quota usage reset successfully`)
};

/**
* | output |
* | --- |
* | "Quota usage reset successfully" |
*
* @param {Quota_Reset_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_reset_successfully = /** @type {((inputs?: Quota_Reset_SuccessfullyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Reset_SuccessfullyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_reset_successfully(inputs)
	return en_quota_reset_successfully(inputs)
});