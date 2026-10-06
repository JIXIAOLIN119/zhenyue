/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_Create_FolderInputs */

const zh_failed_create_folder = /** @type {(inputs: Failed_Create_FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建文件夹失败`)
};

const en_failed_create_folder = /** @type {(inputs: Failed_Create_FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to create folder`)
};

/**
* | output |
* | --- |
* | "Failed to create folder" |
*
* @param {Failed_Create_FolderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_create_folder = /** @type {((inputs?: Failed_Create_FolderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_Create_FolderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_create_folder(inputs)
	return en_failed_create_folder(inputs)
});