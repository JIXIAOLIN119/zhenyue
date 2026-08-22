/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_Active_WindowInputs */

const zh_quota_active_window = /** @type {(inputs: Quota_Active_WindowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`生效周期`)
};

const en_quota_active_window = /** @type {(inputs: Quota_Active_WindowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Active Window`)
};

/**
* | output |
* | --- |
* | "Active Window" |
*
* @param {Quota_Active_WindowInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_active_window = /** @type {((inputs?: Quota_Active_WindowInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Active_WindowInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_active_window(inputs)
	return en_quota_active_window(inputs)
});