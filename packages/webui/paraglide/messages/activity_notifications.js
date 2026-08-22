/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Activity_NotificationsInputs */

const zh_activity_notifications = /** @type {(inputs: Activity_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`活动通知`)
};

const en_activity_notifications = /** @type {(inputs: Activity_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Activity Notifications`)
};

/**
* | output |
* | --- |
* | "Activity Notifications" |
*
* @param {Activity_NotificationsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const activity_notifications = /** @type {((inputs?: Activity_NotificationsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Activity_NotificationsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_activity_notifications(inputs)
	return en_activity_notifications(inputs)
});