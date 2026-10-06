/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_To_Remove_MemberInputs */

const zh_failed_to_remove_member = /** @type {(inputs: Failed_To_Remove_MemberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除成员失败`)
};

const en_failed_to_remove_member = /** @type {(inputs: Failed_To_Remove_MemberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to remove member`)
};

/**
* | output |
* | --- |
* | "Failed to remove member" |
*
* @param {Failed_To_Remove_MemberInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_remove_member = /** @type {((inputs?: Failed_To_Remove_MemberInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_To_Remove_MemberInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_to_remove_member(inputs)
	return en_failed_to_remove_member(inputs)
});