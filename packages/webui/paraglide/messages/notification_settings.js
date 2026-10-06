/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Notification_SettingsInputs */

const zh_notification_settings = /** @type {(inputs: Notification_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知设置`)
};

const en_notification_settings = /** @type {(inputs: Notification_SettingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notification Settings`)
};

/**
* | output |
* | --- |
* | "Notification Settings" |
*
* @param {Notification_SettingsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const notification_settings = /** @type {((inputs?: Notification_SettingsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Notification_SettingsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_notification_settings(inputs)
	return en_notification_settings(inputs)
});