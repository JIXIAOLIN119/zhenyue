/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_Created_SuccessfullyInputs */

const zh_quota_created_successfully = /** @type {(inputs: Quota_Created_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配额规则创建成功`)
};

const en_quota_created_successfully = /** @type {(inputs: Quota_Created_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quota rule created successfully`)
};

/**
* | output |
* | --- |
* | "Quota rule created successfully" |
*
* @param {Quota_Created_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_created_successfully = /** @type {((inputs?: Quota_Created_SuccessfullyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Created_SuccessfullyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_created_successfully(inputs)
	return en_quota_created_successfully(inputs)
});