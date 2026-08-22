/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} NotificationsInputs */

const zh_notifications = /** @type {(inputs: NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

const en_notifications = /** @type {(inputs: NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications`)
};

/**
* | output |
* | --- |
* | "Notifications" |
*
* @param {NotificationsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const notifications = /** @type {((inputs?: NotificationsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<NotificationsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_notifications(inputs)
	return en_notifications(inputs)
});