/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_Update_Project_NotificationInputs */

const zh_failed_update_project_notification = /** @type {(inputs: Failed_Update_Project_NotificationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新项目通知设置失败`)
};

const en_failed_update_project_notification = /** @type {(inputs: Failed_Update_Project_NotificationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to update project notification settings`)
};

/**
* | output |
* | --- |
* | "Failed to update project notification settings" |
*
* @param {Failed_Update_Project_NotificationInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_update_project_notification = /** @type {((inputs?: Failed_Update_Project_NotificationInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_Update_Project_NotificationInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_update_project_notification(inputs)
	return en_failed_update_project_notification(inputs)
});