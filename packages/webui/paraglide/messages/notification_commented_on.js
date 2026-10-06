/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ creator: NonNullable<unknown>, asset: NonNullable<unknown> }} Notification_Commented_OnInputs */

const zh_notification_commented_on = /** @type {(inputs: Notification_Commented_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.creator} 评论了 ${i?.asset}`)
};

const en_notification_commented_on = /** @type {(inputs: Notification_Commented_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.creator} commented on ${i?.asset}`)
};

/**
* | output |
* | --- |
* | "{creator} commented on {asset}" |
*
* @param {Notification_Commented_OnInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const notification_commented_on = /** @type {((inputs: Notification_Commented_OnInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Notification_Commented_OnInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_notification_commented_on(inputs)
	return en_notification_commented_on(inputs)
});