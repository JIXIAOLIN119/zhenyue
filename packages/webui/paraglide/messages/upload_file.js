/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_FileInputs */

const zh_upload_file = /** @type {(inputs: Upload_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传文件`)
};

const en_upload_file = /** @type {(inputs: Upload_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload File`)
};

/**
* | output |
* | --- |
* | "Upload File" |
*
* @param {Upload_FileInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const upload_file = /** @type {((inputs?: Upload_FileInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_FileInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_upload_file(inputs)
	return en_upload_file(inputs)
});