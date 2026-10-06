/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} No_Folder_StructureInputs */

const zh_no_folder_structure = /** @type {(inputs: No_Folder_StructureInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无文件夹结构`)
};

const en_no_folder_structure = /** @type {(inputs: No_Folder_StructureInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No Folder Structure`)
};

/**
* | output |
* | --- |
* | "No Folder Structure" |
*
* @param {No_Folder_StructureInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const no_folder_structure = /** @type {((inputs?: No_Folder_StructureInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<No_Folder_StructureInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_no_folder_structure(inputs)
	return en_no_folder_structure(inputs)
});