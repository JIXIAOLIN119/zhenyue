/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Only_Zip_Files_SupportedInputs */

const zh_only_zip_files_supported = /** @type {(inputs: Only_Zip_Files_SupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅支持 .zip 文件。`)
};

const en_only_zip_files_supported = /** @type {(inputs: Only_Zip_Files_SupportedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only .zip files are supported.`)
};

/**
* | output |
* | --- |
* | "Only .zip files are supported." |
*
* @param {Only_Zip_Files_SupportedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const only_zip_files_supported = /** @type {((inputs?: Only_Zip_Files_SupportedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Only_Zip_Files_SupportedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_only_zip_files_supported(inputs)
	return en_only_zip_files_supported(inputs)
});