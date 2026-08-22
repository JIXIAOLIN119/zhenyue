/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Empty_Trash_TitleInputs */

const zh_empty_trash_title = /** @type {(inputs: Empty_Trash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清空回收站？`)
};

const en_empty_trash_title = /** @type {(inputs: Empty_Trash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Empty Trash?`)
};

/**
* | output |
* | --- |
* | "Empty Trash?" |
*
* @param {Empty_Trash_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const empty_trash_title = /** @type {((inputs?: Empty_Trash_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Empty_Trash_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_empty_trash_title(inputs)
	return en_empty_trash_title(inputs)
});