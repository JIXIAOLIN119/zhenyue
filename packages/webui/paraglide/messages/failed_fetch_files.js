/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_Fetch_FilesInputs */

const zh_failed_fetch_files = /** @type {(inputs: Failed_Fetch_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`获取文件失败`)
};

const en_failed_fetch_files = /** @type {(inputs: Failed_Fetch_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to fetch files`)
};

/**
* | output |
* | --- |
* | "Failed to fetch files" |
*
* @param {Failed_Fetch_FilesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_fetch_files = /** @type {((inputs?: Failed_Fetch_FilesInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_Fetch_FilesInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_fetch_files(inputs)
	return en_failed_fetch_files(inputs)
});