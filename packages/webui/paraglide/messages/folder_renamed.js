/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Folder_RenamedInputs */

const zh_folder_renamed = /** @type {(inputs: Folder_RenamedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件夹已重命名`)
};

const en_folder_renamed = /** @type {(inputs: Folder_RenamedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Folder renamed`)
};

/**
* | output |
* | --- |
* | "Folder renamed" |
*
* @param {Folder_RenamedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const folder_renamed = /** @type {((inputs?: Folder_RenamedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Folder_RenamedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_folder_renamed(inputs)
	return en_folder_renamed(inputs)
});