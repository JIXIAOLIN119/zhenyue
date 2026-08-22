/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_DisabledInputs */

const zh_quota_disabled = /** @type {(inputs: Quota_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已禁用`)
};

const en_quota_disabled = /** @type {(inputs: Quota_DisabledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disabled`)
};

/**
* | output |
* | --- |
* | "Disabled" |
*
* @param {Quota_DisabledInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_disabled = /** @type {((inputs?: Quota_DisabledInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_DisabledInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_disabled(inputs)
	return en_quota_disabled(inputs)
});