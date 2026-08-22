/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Folder_Files_Download_DescriptionInputs */

const zh_folder_files_download_description = /** @type {(inputs: Folder_Files_Download_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所选文件夹中的文件将被准备下载。`)
};

const en_folder_files_download_description = /** @type {(inputs: Folder_Files_Download_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selected folder files will be prepared for download.`)
};

/**
* | output |
* | --- |
* | "Selected folder files will be prepared for download." |
*
* @param {Folder_Files_Download_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const folder_files_download_description = /** @type {((inputs?: Folder_Files_Download_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Folder_Files_Download_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_folder_files_download_description(inputs)
	return en_folder_files_download_description(inputs)
});