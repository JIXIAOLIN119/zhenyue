/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Select_Zip_FileInputs */

const zh_select_zip_file = /** @type {(inputs: Select_Zip_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择 ZIP 文件`)
};

const en_select_zip_file = /** @type {(inputs: Select_Zip_FileInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select ZIP file`)
};

/**
* | output |
* | --- |
* | "Select ZIP file" |
*
* @param {Select_Zip_FileInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const select_zip_file = /** @type {((inputs?: Select_Zip_FileInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Select_Zip_FileInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_select_zip_file(inputs)
	return en_select_zip_file(inputs)
});