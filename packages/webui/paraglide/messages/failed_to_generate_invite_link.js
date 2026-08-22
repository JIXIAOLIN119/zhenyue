/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_To_Generate_Invite_LinkInputs */

const zh_failed_to_generate_invite_link = /** @type {(inputs: Failed_To_Generate_Invite_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`生成邀请链接失败`)
};

const en_failed_to_generate_invite_link = /** @type {(inputs: Failed_To_Generate_Invite_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to generate invite link`)
};

/**
* | output |
* | --- |
* | "Failed to generate invite link" |
*
* @param {Failed_To_Generate_Invite_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_generate_invite_link = /** @type {((inputs?: Failed_To_Generate_Invite_LinkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_To_Generate_Invite_LinkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_to_generate_invite_link(inputs)
	return en_failed_to_generate_invite_link(inputs)
});