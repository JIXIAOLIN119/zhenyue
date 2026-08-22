/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Add_Text_BlockInputs */

const zh_add_text_block = /** @type {(inputs: Add_Text_BlockInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加文本块`)
};

const en_add_text_block = /** @type {(inputs: Add_Text_BlockInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add Text Block`)
};

/**
* | output |
* | --- |
* | "Add Text Block" |
*
* @param {Add_Text_BlockInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const add_text_block = /** @type {((inputs?: Add_Text_BlockInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Add_Text_BlockInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "zh") return zh_add_text_block(inputs)
	return en_add_text_block(inputs)
});