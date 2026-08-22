/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} FolderInputs */

const zh_folder = /** @type {(inputs: FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件夹`)
};

const en_folder = /** @type {(inputs: FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Folder`)
};

/**
* | output |
* | --- |
* | "Folder" |
*
* @param {FolderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const folder = /** @type {((inputs?: FolderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<FolderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_folder(inputs)
	return en_folder(inputs)
});