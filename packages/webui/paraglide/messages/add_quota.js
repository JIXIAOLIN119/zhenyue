/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Add_QuotaInputs */

const zh_add_quota = /** @type {(inputs: Add_QuotaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加配额`)
};

const en_add_quota = /** @type {(inputs: Add_QuotaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add Quota`)
};

/**
* | output |
* | --- |
* | "Add Quota" |
*
* @param {Add_QuotaInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_quota = /** @type {((inputs?: Add_QuotaInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Add_QuotaInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_add_quota(inputs)
	return en_add_quota(inputs)
});