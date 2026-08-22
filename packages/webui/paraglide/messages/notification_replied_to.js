/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ creator: NonNullable<unknown>, asset: NonNullable<unknown> }} Notification_Replied_ToInputs */

const zh_notification_replied_to = /** @type {(inputs: Notification_Replied_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.creator} 回复了 ${i?.asset} 上的评论`)
};

const en_notification_replied_to = /** @type {(inputs: Notification_Replied_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.creator} replied to a comment on ${i?.asset}`)
};

/**
* | output |
* | --- |
* | "{creator} replied to a comment on {asset}" |
*
* @param {Notification_Replied_ToInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const notification_replied_to = /** @type {((inputs: Notification_Replied_ToInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Notification_Replied_ToInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_notification_replied_to(inputs)
	return en_notification_replied_to(inputs)
});