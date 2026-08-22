/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_To_UploadInputs */

const zh_failed_to_upload = /** @type {(inputs: Failed_To_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传失败`)
};

const en_failed_to_upload = /** @type {(inputs: Failed_To_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to upload`)
};

/**
* | output |
* | --- |
* | "Failed to upload" |
*
* @param {Failed_To_UploadInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_upload = /** @type {((inputs?: Failed_To_UploadInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_To_UploadInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_to_upload(inputs)
	return en_failed_to_upload(inputs)
});