/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_Scope_UserInputs */

const zh_quota_scope_user = /** @type {(inputs: Quota_Scope_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`指定用户`)
};

const en_quota_scope_user = /** @type {(inputs: Quota_Scope_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Specific User`)
};

/**
* | output |
* | --- |
* | "Specific User" |
*
* @param {Quota_Scope_UserInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_scope_user = /** @type {((inputs?: Quota_Scope_UserInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Scope_UserInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_scope_user(inputs)
	return en_quota_scope_user(inputs)
});