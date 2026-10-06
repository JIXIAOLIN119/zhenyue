/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} New_FolderInputs */

const zh_new_folder = /** @type {(inputs: New_FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新建文件夹`)
};

const en_new_folder = /** @type {(inputs: New_FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New Folder`)
};

/**
* | output |
* | --- |
* | "New Folder" |
*
* @param {New_FolderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const new_folder = /** @type {((inputs?: New_FolderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<New_FolderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_new_folder(inputs)
	return en_new_folder(inputs)
});