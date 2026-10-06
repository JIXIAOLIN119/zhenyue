/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Delete_Folder_ConfirmInputs */

const zh_delete_folder_confirm = /** @type {(inputs: Delete_Folder_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除文件夹？`)
};

const en_delete_folder_confirm = /** @type {(inputs: Delete_Folder_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete Folder?`)
};

/**
* | output |
* | --- |
* | "Delete Folder?" |
*
* @param {Delete_Folder_ConfirmInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const delete_folder_confirm = /** @type {((inputs?: Delete_Folder_ConfirmInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Delete_Folder_ConfirmInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_delete_folder_confirm(inputs)
	return en_delete_folder_confirm(inputs)
});