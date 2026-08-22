/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_To_Update_PermissionInputs */

const zh_failed_to_update_permission = /** @type {(inputs: Failed_To_Update_PermissionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新权限失败`)
};

const en_failed_to_update_permission = /** @type {(inputs: Failed_To_Update_PermissionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to update permission`)
};

/**
* | output |
* | --- |
* | "Failed to update permission" |
*
* @param {Failed_To_Update_PermissionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_update_permission = /** @type {((inputs?: Failed_To_Update_PermissionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_To_Update_PermissionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_to_update_permission(inputs)
	return en_failed_to_update_permission(inputs)
});