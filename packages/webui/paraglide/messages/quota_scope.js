/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_ScopeInputs */

const zh_quota_scope = /** @type {(inputs: Quota_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`范围`)
};

const en_quota_scope = /** @type {(inputs: Quota_ScopeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scope`)
};

/**
* | output |
* | --- |
* | "Scope" |
*
* @param {Quota_ScopeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_scope = /** @type {((inputs?: Quota_ScopeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_ScopeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_scope(inputs)
	return en_quota_scope(inputs)
});