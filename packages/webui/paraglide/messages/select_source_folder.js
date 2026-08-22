/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_Source_FolderInputs */

const zh_select_source_folder = /** @type {(inputs: Select_Source_FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择来源文件夹`)
};

const en_select_source_folder = /** @type {(inputs: Select_Source_FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select Source Folder`)
};

/**
* | output |
* | --- |
* | "Select Source Folder" |
*
* @param {Select_Source_FolderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_source_folder = /** @type {((inputs?: Select_Source_FolderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_Source_FolderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_source_folder(inputs)
	return en_select_source_folder(inputs)
});