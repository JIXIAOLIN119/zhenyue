/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Invite_Link_CopiedInputs */

const zh_invite_link_copied = /** @type {(inputs: Invite_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`邀请链接已复制到剪贴板`)
};

const en_invite_link_copied = /** @type {(inputs: Invite_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invite link copied to clipboard`)
};

/**
* | output |
* | --- |
* | "Invite link copied to clipboard" |
*
* @param {Invite_Link_CopiedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const invite_link_copied = /** @type {((inputs?: Invite_Link_CopiedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Invite_Link_CopiedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_invite_link_copied(inputs)
	return en_invite_link_copied(inputs)
});