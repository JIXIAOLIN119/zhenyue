/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_Deleted_SuccessfullyInputs */

const zh_quota_deleted_successfully = /** @type {(inputs: Quota_Deleted_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配额规则删除成功`)
};

const en_quota_deleted_successfully = /** @type {(inputs: Quota_Deleted_SuccessfullyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quota rule deleted successfully`)
};

/**
* | output |
* | --- |
* | "Quota rule deleted successfully" |
*
* @param {Quota_Deleted_SuccessfullyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_deleted_successfully = /** @type {((inputs?: Quota_Deleted_SuccessfullyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Deleted_SuccessfullyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_deleted_successfully(inputs)
	return en_quota_deleted_successfully(inputs)
});