/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Rename_FolderInputs */

const zh_rename_folder = /** @type {(inputs: Rename_FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重命名文件夹`)
};

const en_rename_folder = /** @type {(inputs: Rename_FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rename Folder`)
};

/**
* | output |
* | --- |
* | "Rename Folder" |
*
* @param {Rename_FolderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const rename_folder = /** @type {((inputs?: Rename_FolderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Rename_FolderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_rename_folder(inputs)
	return en_rename_folder(inputs)
});