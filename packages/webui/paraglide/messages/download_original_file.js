/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Download_Original_FileInputs */

const zh_download_original_file = /** @type {(inputs: Download_Original_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载原始文件`)
};

const en_download_original_file = /** @type {(inputs: Download_Original_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download original file`)
};

/**
* | output |
* | --- |
* | "Download original file" |
*
* @param {Download_Original_FileInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const download_original_file = /** @type {((inputs?: Download_Original_FileInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Download_Original_FileInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_download_original_file(inputs)
	return en_download_original_file(inputs)
});