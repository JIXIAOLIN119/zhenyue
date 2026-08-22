/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Member_Role_UpdatedInputs */

const zh_member_role_updated = /** @type {(inputs: Member_Role_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`成员角色已更新`)
};

const en_member_role_updated = /** @type {(inputs: Member_Role_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Member role updated`)
};

/**
* | output |
* | --- |
* | "Member role updated" |
*
* @param {Member_Role_UpdatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const member_role_updated = /** @type {((inputs?: Member_Role_UpdatedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Member_Role_UpdatedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_member_role_updated(inputs)
	return en_member_role_updated(inputs)
});