/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Notification_Settings_UpdatedInputs */

const zh_notification_settings_updated = /** @type {(inputs: Notification_Settings_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知设置已更新`)
};

const en_notification_settings_updated = /** @type {(inputs: Notification_Settings_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notification settings updated`)
};

/**
* | output |
* | --- |
* | "Notification settings updated" |
*
* @param {Notification_Settings_UpdatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const notification_settings_updated = /** @type {((inputs?: Notification_Settings_UpdatedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Notification_Settings_UpdatedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_notification_settings_updated(inputs)
	return en_notification_settings_updated(inputs)
});