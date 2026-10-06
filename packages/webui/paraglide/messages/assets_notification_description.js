/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Assets_Notification_DescriptionInputs */

const zh_assets_notification_description = /** @type {(inputs: Assets_Notification_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理与文件上传和元数据字段状态更新相关的通知。`)
};

const en_assets_notification_description = /** @type {(inputs: Assets_Notification_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage notifications related to file uploads and metadata field status updates.`)
};

/**
* | output |
* | --- |
* | "Manage notifications related to file uploads and metadata field status updates." |
*
* @param {Assets_Notification_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const assets_notification_description = /** @type {((inputs?: Assets_Notification_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Assets_Notification_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_assets_notification_description(inputs)
	return en_assets_notification_description(inputs)
});