/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Activity_Notifications_DescriptionInputs */

const zh_activity_notifications_description = /** @type {(inputs: Activity_Notifications_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`接收此项目中评论、上传及自动后台分析任务的应用内通知。`)
};

const en_activity_notifications_description = /** @type {(inputs: Activity_Notifications_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Receive in-app updates for comments, uploads, and automated background analysis tasks inside this project.`)
};

/**
* | output |
* | --- |
* | "Receive in-app updates for comments, uploads, and automated background analysis tasks inside this project." |
*
* @param {Activity_Notifications_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const activity_notifications_description = /** @type {((inputs?: Activity_Notifications_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Activity_Notifications_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_activity_notifications_description(inputs)
	return en_activity_notifications_description(inputs)
});