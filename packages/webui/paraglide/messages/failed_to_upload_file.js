/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Failed_To_Upload_FileInputs */

const zh_failed_to_upload_file = /** @type {(inputs: Failed_To_Upload_FileInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`文件上传失败：${i?.name}`)
};

const en_failed_to_upload_file = /** @type {(inputs: Failed_To_Upload_FileInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Failed to upload file: ${i?.name}`)
};

/**
* | output |
* | --- |
* | "Failed to upload file: {name}" |
*
* @param {Failed_To_Upload_FileInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_upload_file = /** @type {((inputs: Failed_To_Upload_FileInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_To_Upload_FileInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_to_upload_file(inputs)
	return en_failed_to_upload_file(inputs)
});