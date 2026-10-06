/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_FolderInputs */

const zh_select_folder = /** @type {(inputs: Select_FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择文件夹`)
};

const en_select_folder = /** @type {(inputs: Select_FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select Folder`)
};

/**
* | output |
* | --- |
* | "Select Folder" |
*
* @param {Select_FolderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_folder = /** @type {((inputs?: Select_FolderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_FolderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_folder(inputs)
	return en_select_folder(inputs)
});