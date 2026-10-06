/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} File_Not_FoundInputs */

const zh_file_not_found = /** @type {(inputs: File_Not_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件未找到。`)
};

const en_file_not_found = /** @type {(inputs: File_Not_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File not found.`)
};

/**
* | output |
* | --- |
* | "File not found." |
*
* @param {File_Not_FoundInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const file_not_found = /** @type {((inputs?: File_Not_FoundInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<File_Not_FoundInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_file_not_found(inputs)
	return en_file_not_found(inputs)
});