/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} NotificationInputs */

const zh_notification = /** @type {(inputs: NotificationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

const en_notification = /** @type {(inputs: NotificationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notification`)
};

/**
* | output |
* | --- |
* | "Notification" |
*
* @param {NotificationInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const notification = /** @type {((inputs?: NotificationInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<NotificationInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_notification(inputs)
	return en_notification(inputs)
});