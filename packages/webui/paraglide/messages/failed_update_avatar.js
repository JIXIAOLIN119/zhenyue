/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_Update_AvatarInputs */

const zh_failed_update_avatar = /** @type {(inputs: Failed_Update_AvatarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`头像更新失败`)
};

const en_failed_update_avatar = /** @type {(inputs: Failed_Update_AvatarInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to update avatar`)
};

/**
* | output |
* | --- |
* | "Failed to update avatar" |
*
* @param {Failed_Update_AvatarInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_update_avatar = /** @type {((inputs?: Failed_Update_AvatarInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_Update_AvatarInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_update_avatar(inputs)
	return en_failed_update_avatar(inputs)
});