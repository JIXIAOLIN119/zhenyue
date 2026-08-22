/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Invite_New_MemberInputs */

const zh_invite_new_member = /** @type {(inputs: Invite_New_MemberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`邀请新成员`)
};

const en_invite_new_member = /** @type {(inputs: Invite_New_MemberInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invite New Member`)
};

/**
* | output |
* | --- |
* | "Invite New Member" |
*
* @param {Invite_New_MemberInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const invite_new_member = /** @type {((inputs?: Invite_New_MemberInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Invite_New_MemberInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_invite_new_member(inputs)
	return en_invite_new_member(inputs)
});