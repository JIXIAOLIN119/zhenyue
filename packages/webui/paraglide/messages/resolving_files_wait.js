/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Resolving_Files_WaitInputs */

const zh_resolving_files_wait = /** @type {(inputs: Resolving_Files_WaitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在解析所有文件和文件夹，请稍候...`)
};

const en_resolving_files_wait = /** @type {(inputs: Resolving_Files_WaitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resolving all files and folders. Please wait...`)
};

/**
* | output |
* | --- |
* | "Resolving all files and folders. Please wait..." |
*
* @param {Resolving_Files_WaitInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const resolving_files_wait = /** @type {((inputs?: Resolving_Files_WaitInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Resolving_Files_WaitInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_resolving_files_wait(inputs)
	return en_resolving_files_wait(inputs)
});