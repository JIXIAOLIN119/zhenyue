/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Failed_To_Fetch_Folder_ChildrenInputs */

const zh_failed_to_fetch_folder_children = /** @type {(inputs: Failed_To_Fetch_Folder_ChildrenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`获取子文件夹失败`)
};

const en_failed_to_fetch_folder_children = /** @type {(inputs: Failed_To_Fetch_Folder_ChildrenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to fetch folder children`)
};

/**
* | output |
* | --- |
* | "Failed to fetch folder children" |
*
* @param {Failed_To_Fetch_Folder_ChildrenInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const failed_to_fetch_folder_children = /** @type {((inputs?: Failed_To_Fetch_Folder_ChildrenInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Failed_To_Fetch_Folder_ChildrenInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_failed_to_fetch_folder_children(inputs)
	return en_failed_to_fetch_folder_children(inputs)
});