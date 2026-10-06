/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Go_To_FolderInputs */

const zh_go_to_folder = /** @type {(inputs: Go_To_FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前往文件夹`)
};

const en_go_to_folder = /** @type {(inputs: Go_To_FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Go to folder`)
};

/**
* | output |
* | --- |
* | "Go to folder" |
*
* @param {Go_To_FolderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const go_to_folder = /** @type {((inputs?: Go_To_FolderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Go_To_FolderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_go_to_folder(inputs)
	return en_go_to_folder(inputs)
});