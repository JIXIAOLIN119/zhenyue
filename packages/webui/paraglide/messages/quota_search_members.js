/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Quota_Search_MembersInputs */

const zh_quota_search_members = /** @type {(inputs: Quota_Search_MembersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索成员...`)
};

const en_quota_search_members = /** @type {(inputs: Quota_Search_MembersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search members...`)
};

/**
* | output |
* | --- |
* | "Search members..." |
*
* @param {Quota_Search_MembersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const quota_search_members = /** @type {((inputs?: Quota_Search_MembersInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Quota_Search_MembersInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_quota_search_members(inputs)
	return en_quota_search_members(inputs)
});