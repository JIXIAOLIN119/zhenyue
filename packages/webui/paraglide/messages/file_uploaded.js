/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} File_UploadedInputs */

const zh_file_uploaded = /** @type {(inputs: File_UploadedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件已上传`)
};

const en_file_uploaded = /** @type {(inputs: File_UploadedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File uploaded`)
};

/**
* | output |
* | --- |
* | "File uploaded" |
*
* @param {File_UploadedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const file_uploaded = /** @type {((inputs?: File_UploadedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<File_UploadedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_file_uploaded(inputs)
	return en_file_uploaded(inputs)
});