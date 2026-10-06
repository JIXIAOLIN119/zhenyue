/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ creator: NonNullable<unknown> }} Notification_GenericInputs */

const zh_notification_generic = /** @type {(inputs: Notification_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`来自 ${i?.creator} 的新通知`)
};

const en_notification_generic = /** @type {(inputs: Notification_GenericInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`New notification from ${i?.creator}`)
};

/**
* | output |
* | --- |
* | "New notification from {creator}" |
*
* @param {Notification_GenericInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const notification_generic = /** @type {((inputs: Notification_GenericInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Notification_GenericInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_notification_generic(inputs)
	return en_notification_generic(inputs)
});