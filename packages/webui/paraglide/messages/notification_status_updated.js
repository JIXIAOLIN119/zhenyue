/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ creator: NonNullable<unknown>, asset: NonNullable<unknown> }} Notification_Status_UpdatedInputs */

const zh_notification_status_updated = /** @type {(inputs: Notification_Status_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.creator} 更新了 ${i?.asset} 的状态`)
};

const en_notification_status_updated = /** @type {(inputs: Notification_Status_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.creator} updated status of ${i?.asset}`)
};

/**
* | output |
* | --- |
* | "{creator} updated status of {asset}" |
*
* @param {Notification_Status_UpdatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const notification_status_updated = /** @type {((inputs: Notification_Status_UpdatedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Notification_Status_UpdatedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_notification_status_updated(inputs)
	return en_notification_status_updated(inputs)
});