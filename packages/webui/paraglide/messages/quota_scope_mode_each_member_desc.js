/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_Scope_Mode_Each_Member_DescInputs */

const zh_quota_scope_mode_each_member_desc = /** @type {(inputs: Quota_Scope_Mode_Each_Member_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为每个符合条件的成员分别设定独立的配额上限`)
};

const en_quota_scope_mode_each_member_desc = /** @type {(inputs: Quota_Scope_Mode_Each_Member_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Individual limit for each matching member`)
};

/**
* | output |
* | --- |
* | "Individual limit for each matching member" |
*
* @param {Quota_Scope_Mode_Each_Member_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_scope_mode_each_member_desc = /** @type {((inputs?: Quota_Scope_Mode_Each_Member_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Scope_Mode_Each_Member_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_scope_mode_each_member_desc(inputs)
	return en_quota_scope_mode_each_member_desc(inputs)
});