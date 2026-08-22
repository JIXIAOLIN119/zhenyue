/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Notification_DescriptionInputs */

const zh_comments_notification_description = /** @type {(inputs: Comments_Notification_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`控制其他用户对您协作的素材评论或提及您时的通知偏好。`)
};

const en_comments_notification_description = /** @type {(inputs: Comments_Notification_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Control notification preferences when other users comment on assets you collaborate on or mention you.`)
};

/**
* | output |
* | --- |
* | "Control notification preferences when other users comment on assets you collaborate on or mention you." |
*
* @param {Comments_Notification_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_notification_description = /** @type {((inputs?: Comments_Notification_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Notification_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_comments_notification_description(inputs)
	return en_comments_notification_description(inputs)
});