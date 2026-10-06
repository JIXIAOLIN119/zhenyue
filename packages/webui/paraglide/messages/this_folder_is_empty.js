/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} This_Folder_Is_EmptyInputs */

const zh_this_folder_is_empty = /** @type {(inputs: This_Folder_Is_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此文件夹为空`)
};

const en_this_folder_is_empty = /** @type {(inputs: This_Folder_Is_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This folder is empty`)
};

/**
* | output |
* | --- |
* | "This folder is empty" |
*
* @param {This_Folder_Is_EmptyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const this_folder_is_empty = /** @type {((inputs?: This_Folder_Is_EmptyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<This_Folder_Is_EmptyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_this_folder_is_empty(inputs)
	return en_this_folder_is_empty(inputs)
});