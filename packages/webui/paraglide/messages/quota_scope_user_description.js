/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_Scope_User_DescriptionInputs */

const zh_quota_scope_user_description = /** @type {(inputs: Quota_Scope_User_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅对选定的用户生效`)
};

const en_quota_scope_user_description = /** @type {(inputs: Quota_Scope_User_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Applies exclusively to the selected user`)
};

/**
* | output |
* | --- |
* | "Applies exclusively to the selected user" |
*
* @param {Quota_Scope_User_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_scope_user_description = /** @type {((inputs?: Quota_Scope_User_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Scope_User_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_scope_user_description(inputs)
	return en_quota_scope_user_description(inputs)
});