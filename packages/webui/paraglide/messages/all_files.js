/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} All_FilesInputs */

const zh_all_files = /** @type {(inputs: All_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部文件`)
};

const en_all_files = /** @type {(inputs: All_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All Files`)
};

/**
* | output |
* | --- |
* | "All Files" |
*
* @param {All_FilesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const all_files = /** @type {((inputs?: All_FilesInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<All_FilesInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_all_files(inputs)
	return en_all_files(inputs)
});