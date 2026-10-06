/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ creator: NonNullable<unknown>, asset: NonNullable<unknown>, project: NonNullable<unknown> }} Notification_UploadedInputs */

const zh_notification_uploaded = /** @type {(inputs: Notification_UploadedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.creator} 将 ${i?.asset} 上传到 ${i?.project}`)
};

const en_notification_uploaded = /** @type {(inputs: Notification_UploadedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.creator} uploaded ${i?.asset} to ${i?.project}`)
};

/**
* | output |
* | --- |
* | "{creator} uploaded {asset} to {project}" |
*
* @param {Notification_UploadedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const notification_uploaded = /** @type {((inputs: Notification_UploadedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Notification_UploadedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_notification_uploaded(inputs)
	return en_notification_uploaded(inputs)
});