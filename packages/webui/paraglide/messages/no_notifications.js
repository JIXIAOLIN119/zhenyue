/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_NotificationsInputs */

const zh_no_notifications = /** @type {(inputs: No_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无通知`)
};

const en_no_notifications = /** @type {(inputs: No_NotificationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No notifications`)
};

/**
* | output |
* | --- |
* | "No notifications" |
*
* @param {No_NotificationsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_notifications = /** @type {((inputs?: No_NotificationsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_NotificationsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_notifications(inputs)
	return en_no_notifications(inputs)
});