/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_Upload_FileInputs */

const zh_failed_upload_file = /** @type {(inputs: Failed_Upload_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传文件失败`)
};

const en_failed_upload_file = /** @type {(inputs: Failed_Upload_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to upload file`)
};

/**
* | output |
* | --- |
* | "Failed to upload file" |
*
* @param {Failed_Upload_FileInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_upload_file = /** @type {((inputs?: Failed_Upload_FileInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_Upload_FileInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_upload_file(inputs)
	return en_failed_upload_file(inputs)
});