/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_Scope_ModeInputs */

const zh_quota_scope_mode = /** @type {(inputs: Quota_Scope_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`目标模式`)
};

const en_quota_scope_mode = /** @type {(inputs: Quota_Scope_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Target Mode`)
};

/**
* | output |
* | --- |
* | "Target Mode" |
*
* @param {Quota_Scope_ModeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_scope_mode = /** @type {((inputs?: Quota_Scope_ModeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Scope_ModeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_scope_mode(inputs)
	return en_quota_scope_mode(inputs)
});