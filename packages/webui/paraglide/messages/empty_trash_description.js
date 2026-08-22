/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Empty_Trash_DescriptionInputs */

const zh_empty_trash_description = /** @type {(inputs: Empty_Trash_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回收站中的所有项目将从数据库和存储中永久删除。此操作无法撤销。`)
};

const en_empty_trash_description = /** @type {(inputs: Empty_Trash_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All items in the recently deleted folder will be permanently removed both from the database and from storage. This action cannot be undone.`)
};

/**
* | output |
* | --- |
* | "All items in the recently deleted folder will be permanently removed both from the database and from storage. This action cannot be undone." |
*
* @param {Empty_Trash_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const empty_trash_description = /** @type {((inputs?: Empty_Trash_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Empty_Trash_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_empty_trash_description(inputs)
	return en_empty_trash_description(inputs)
});