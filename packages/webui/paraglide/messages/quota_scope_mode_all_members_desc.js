/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_Scope_Mode_All_Members_DescInputs */

const zh_quota_scope_mode_all_members_desc = /** @type {(inputs: Quota_Scope_Mode_All_Members_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有符合条件的成员共同享有总配额上限`)
};

const en_quota_scope_mode_all_members_desc = /** @type {(inputs: Quota_Scope_Mode_All_Members_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shared pooled limit across all matching members`)
};

/**
* | output |
* | --- |
* | "Shared pooled limit across all matching members" |
*
* @param {Quota_Scope_Mode_All_Members_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_scope_mode_all_members_desc = /** @type {((inputs?: Quota_Scope_Mode_All_Members_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Scope_Mode_All_Members_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_scope_mode_all_members_desc(inputs)
	return en_quota_scope_mode_all_members_desc(inputs)
});