/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ time: NonNullable<unknown> }} Quota_Refreshes_InInputs */

const zh_quota_refreshes_in = /** @type {(inputs: Quota_Refreshes_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.time} 后重置`)
};

const en_quota_refreshes_in = /** @type {(inputs: Quota_Refreshes_InInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Refreshes in ${i?.time}`)
};

/**
* | output |
* | --- |
* | "Refreshes in {time}" |
*
* @param {Quota_Refreshes_InInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_refreshes_in = /** @type {((inputs: Quota_Refreshes_InInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Refreshes_InInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_refreshes_in(inputs)
	return en_quota_refreshes_in(inputs)
});