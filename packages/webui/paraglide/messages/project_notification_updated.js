/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Project_Notification_UpdatedInputs */

const zh_project_notification_updated = /** @type {(inputs: Project_Notification_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`项目通知设置已更新`)
};

const en_project_notification_updated = /** @type {(inputs: Project_Notification_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Project notification settings updated`)
};

/**
* | output |
* | --- |
* | "Project notification settings updated" |
*
* @param {Project_Notification_UpdatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const project_notification_updated = /** @type {((inputs?: Project_Notification_UpdatedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Project_Notification_UpdatedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_project_notification_updated(inputs)
	return en_project_notification_updated(inputs)
});