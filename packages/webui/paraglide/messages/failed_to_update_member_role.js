/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_To_Update_Member_RoleInputs */

const zh_failed_to_update_member_role = /** @type {(inputs: Failed_To_Update_Member_RoleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新成员角色失败`)
};

const en_failed_to_update_member_role = /** @type {(inputs: Failed_To_Update_Member_RoleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to update member role`)
};

/**
* | output |
* | --- |
* | "Failed to update member role" |
*
* @param {Failed_To_Update_Member_RoleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_update_member_role = /** @type {((inputs?: Failed_To_Update_Member_RoleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_To_Update_Member_RoleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_to_update_member_role(inputs)
	return en_failed_to_update_member_role(inputs)
});