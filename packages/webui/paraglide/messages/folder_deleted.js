/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Folder_DeletedInputs */

const zh_folder_deleted = /** @type {(inputs: Folder_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件夹已删除`)
};

const en_folder_deleted = /** @type {(inputs: Folder_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Folder deleted`)
};

/**
* | output |
* | --- |
* | "Folder deleted" |
*
* @param {Folder_DeletedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const folder_deleted = /** @type {((inputs?: Folder_DeletedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Folder_DeletedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_folder_deleted(inputs)
	return en_folder_deleted(inputs)
});