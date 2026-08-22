/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Delete_QuotaInputs */

const zh_delete_quota = /** @type {(inputs: Delete_QuotaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除配额`)
};

const en_delete_quota = /** @type {(inputs: Delete_QuotaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete Quota`)
};

/**
* | output |
* | --- |
* | "Delete Quota" |
*
* @param {Delete_QuotaInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_quota = /** @type {((inputs?: Delete_QuotaInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Delete_QuotaInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_delete_quota(inputs)
	return en_delete_quota(inputs)
});