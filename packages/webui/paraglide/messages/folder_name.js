/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Folder_NameInputs */

const zh_folder_name = /** @type {(inputs: Folder_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件夹名称`)
};

const en_folder_name = /** @type {(inputs: Folder_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Folder name`)
};

/**
* | output |
* | --- |
* | "Folder name" |
*
* @param {Folder_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const folder_name = /** @type {((inputs?: Folder_NameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Folder_NameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_folder_name(inputs)
	return en_folder_name(inputs)
});