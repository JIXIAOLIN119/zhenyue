/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_Delete_FolderInputs */

const zh_failed_delete_folder = /** @type {(inputs: Failed_Delete_FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除文件夹失败`)
};

const en_failed_delete_folder = /** @type {(inputs: Failed_Delete_FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to delete folder`)
};

/**
* | output |
* | --- |
* | "Failed to delete folder" |
*
* @param {Failed_Delete_FolderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_delete_folder = /** @type {((inputs?: Failed_Delete_FolderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_Delete_FolderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_delete_folder(inputs)
	return en_failed_delete_folder(inputs)
});