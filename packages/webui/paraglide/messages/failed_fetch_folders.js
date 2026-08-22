/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_Fetch_FoldersInputs */

const zh_failed_fetch_folders = /** @type {(inputs: Failed_Fetch_FoldersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`获取文件夹失败`)
};

const en_failed_fetch_folders = /** @type {(inputs: Failed_Fetch_FoldersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to fetch folders`)
};

/**
* | output |
* | --- |
* | "Failed to fetch folders" |
*
* @param {Failed_Fetch_FoldersInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_fetch_folders = /** @type {((inputs?: Failed_Fetch_FoldersInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_Fetch_FoldersInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_fetch_folders(inputs)
	return en_failed_fetch_folders(inputs)
});