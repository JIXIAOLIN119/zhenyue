/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Remove_MemberInputs */

const zh_remove_member = /** @type {(inputs: Remove_MemberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除成员`)
};

const en_remove_member = /** @type {(inputs: Remove_MemberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove Member`)
};

/**
* | output |
* | --- |
* | "Remove Member" |
*
* @param {Remove_MemberInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const remove_member = /** @type {((inputs?: Remove_MemberInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Remove_MemberInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_remove_member(inputs)
	return en_remove_member(inputs)
});