/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_FolderInputs */

const zh_upload_folder = /** @type {(inputs: Upload_FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传文件夹`)
};

const en_upload_folder = /** @type {(inputs: Upload_FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload Folder`)
};

/**
* | output |
* | --- |
* | "Upload Folder" |
*
* @param {Upload_FolderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const upload_folder = /** @type {((inputs?: Upload_FolderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_FolderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_upload_folder(inputs)
	return en_upload_folder(inputs)
});