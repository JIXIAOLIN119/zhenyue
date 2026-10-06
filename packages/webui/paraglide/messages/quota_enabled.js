/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_EnabledInputs */

const zh_quota_enabled = /** @type {(inputs: Quota_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已启用`)
};

const en_quota_enabled = /** @type {(inputs: Quota_EnabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enabled`)
};

/**
* | output |
* | --- |
* | "Enabled" |
*
* @param {Quota_EnabledInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_enabled = /** @type {((inputs?: Quota_EnabledInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_EnabledInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_enabled(inputs)
	return en_quota_enabled(inputs)
});