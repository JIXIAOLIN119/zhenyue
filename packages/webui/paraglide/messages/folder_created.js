/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Folder_CreatedInputs */

const zh_folder_created = /** @type {(inputs: Folder_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件夹已创建`)
};

const en_folder_created = /** @type {(inputs: Folder_CreatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Folder created`)
};

/**
* | output |
* | --- |
* | "Folder created" |
*
* @param {Folder_CreatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const folder_created = /** @type {((inputs?: Folder_CreatedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Folder_CreatedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_folder_created(inputs)
	return en_folder_created(inputs)
});